export const GTM_ID = "GTM-NQZH2L93";
// Published container currently collects personal matching data on formSubmit.
// Enable only after those tags are removed and consent handling is verified.
export const GTM_READY = false;
export const PIXEL_ID = "1051251949505769";
export const CONSENT_KEY = "acelera-advertising-consent-v1";
export const NOTICE_VERSION = "2026-10-29-v1";
export const NOTICE_TEXT = "Usamos Google Tag Manager e Meta Pixel para compartilhar páginas visitadas, envio do formulário, identificadores de cookies e dados do navegador com Google e Meta, para medir campanhas e otimizar anúncios. As respostas do formulário não são enviadas aos rastreadores. Você pode aceitar, rejeitar ou mudar sua escolha em Configurações de cookies.";

export interface ConsentRecord {
  visitorId: string;
  advertising: boolean;
  region: string | null;
  decidedAt: string;
  noticeVersion: string;
  noticeText: string;
  choices: readonly string[];
}
export interface ConsentHistory { visitorId: string; records: ConsentRecord[] }

const CONSENT_REGIONS = new Set("AT BE BG HR CY CZ DK EE FI FR DE GR HU IS IE IT LV LI LT LU MT NL NO PL PT RO SK SI ES SE GB CH BR CA ZA KR".split(" "));
export function regionRequiresConsent(region: string | null) {
  return !region || !/^[A-Z]{2}$/.test(region) || region === "XX" || region === "T1" || CONSENT_REGIONS.has(region);
}
export function advertisingAllowed(region: string | null, record: ConsentRecord | undefined, optOut = false) {
  if (optOut) return false;
  if (record) return record.advertising;
  return !regionRequiresConsent(region);
}
export function canReportLead(atSubmission: boolean, currentlyAllowed: boolean) {
  return atSubmission && currentlyAllowed;
}
export function parseTrace(trace: string, host: string): string | null {
  const lines = Object.fromEntries(trace.split("\n").map(line => {
    const index = line.indexOf("=");
    return [line.slice(0, index), line.slice(index + 1)];
  }));
  return lines.h === host && /^[A-Z]{2}$/.test(lines.loc ?? "") && !["XX", "T1"].includes(lines.loc) ? lines.loc : null;
}