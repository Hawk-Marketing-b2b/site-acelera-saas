import { canReportLead, CONSENT_KEY, GTM_ID, GTM_READY, PIXEL_ID, type ConsentHistory } from "./tracking-policy";

type Pixel = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push?: Pixel;
  loaded: boolean;
  version: string;
};
declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: Pixel;
    _fbq?: Pixel;
  }
}
let region: string | null = null;
let resolved = false;
let installed = false;
let lastPage: string | null = null;

export function readConsent(): ConsentHistory | null {
  try {
    const value = JSON.parse(localStorage.getItem(CONSENT_KEY) ?? "null");
    if (!value || typeof value.visitorId !== "string" || !Array.isArray(value.records)) return null;
    if (!value.records.every((record: Record<string, unknown>) => typeof record.advertising === "boolean" && typeof record.decidedAt === "string" && typeof record.noticeVersion === "string" && typeof record.noticeText === "string")) return null;
    return value as ConsentHistory;
  } catch { return null; }
}
function optOut() {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true || navigator.doNotTrack === "1";
}
export function trackingPermitted() {
  if (!resolved || typeof window === "undefined") return false;
  return true;
}
function gtag(..._args: unknown[]) {
  window.dataLayer ??= [];
  window.dataLayer.push(arguments);
}
function sanitizeAddress() {
  const url = new URL(window.location.href);
  for (const key of [...url.searchParams.keys()]) {
    if (/email|e-mail|phone|telefone|whatsapp|nome|name|cpf|document|address|endereco|token/i.test(key)) url.searchParams.delete(key);
  }
  if (url.href !== window.location.href) window.history.replaceState(window.history.state, "", url);
}
function install() {
  if (installed) return;
  installed = true;
  sanitizeAddress();
  gtag("consent", "default", { ad_storage: "denied", analytics_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  // No personal matching is installed. Tags configured in GTM must respect consent.
  gtag("consent", "update", { ad_storage: "granted", analytics_storage: "denied", ad_user_data: "denied", ad_personalization: "granted" });
  if (GTM_READY) {
    window.dataLayer?.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const gtm = document.createElement("script");
    gtm.id = "acelera-gtm";
    gtm.async = true;
    gtm.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(gtm);
  }
  const pixel: Pixel = Object.assign(function (...args: unknown[]) {
    if (pixel.callMethod) pixel.callMethod.apply(pixel, args);
    else pixel.queue.push(args);
  }, { queue: [] as unknown[][], loaded: true, version: "2.0" });
  pixel.push = pixel;
  window.fbq = pixel;
  window._fbq = pixel;
  pixel("consent", "grant");
  pixel("init", PIXEL_ID, {}, { agent: "lovable" });
  pixel("set", "autoConfig", false, PIXEL_ID);
  const script = document.createElement("script");
  script.id = "acelera-meta-pixel";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
}
export function applyTrackingPermission(nextRegion: string | null) {
  region = nextRegion;
  resolved = true;
  if (trackingPermitted()) {
    install();
    gtag("consent", "update", { ad_storage: "granted", analytics_storage: "denied", ad_user_data: "denied", ad_personalization: "granted" });
    window.fbq?.("consent", "grant");
  } else {
    if (installed) {
      gtag("consent", "update", { ad_storage: "denied", analytics_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      window.fbq?.("consent", "revoke");
    }
    lastPage = null;
  }
}
export function reportPageView(path: string) {
  if (!trackingPermitted() || lastPage === path) return;
  lastPage = path;
  sanitizeAddress();
  window.dataLayer?.push({ event: "PageView", page_path: path });
  window.fbq?.("track", "PageView");
}
export function reportLead(permittedAtSubmission: boolean) {
  if (!canReportLead(permittedAtSubmission, trackingPermitted())) return;
  const id = crypto.randomUUID();
  window.dataLayer?.push({ event: "Lead", form_id: "contact", event_id: id });
  window.fbq?.("track", "Lead", {}, { eventID: id });
}