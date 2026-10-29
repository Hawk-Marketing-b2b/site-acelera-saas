import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { applyTrackingPermission, readConsent, reportPageView } from "@/lib/tracking";
import { CONSENT_KEY, NOTICE_TEXT, NOTICE_VERSION, parseTrace, regionRequiresConsent, type ConsentHistory } from "@/lib/tracking-policy";

export function TrackingConsent() {
  const path = useRouterState({ select: state => state.location.pathname });
  const [region, setRegion] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [settings, setSettings] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    fetch("/cdn-cgi/trace", { signal: controller.signal }).then(async response => {
      return response.ok ? parseTrace(await response.text(), window.location.host) : null;
    }).catch(() => null).then(loc => {
      if (!active) return;
      setRegion(loc);
      setReady(true);
      setShowBanner(regionRequiresConsent(loc) && !readConsent());
    }).finally(() => clearTimeout(timeout));
    return () => { active = false; controller.abort(); clearTimeout(timeout); };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const sync = () => {
      applyTrackingPermission(region);
      reportPageView(path);
      setShowBanner(regionRequiresConsent(region) && !readConsent());
    };
    const storage = (event: StorageEvent) => { if (event.key === CONSENT_KEY || event.key === null) sync(); };
    sync();
    window.addEventListener("storage", storage);
    window.addEventListener("acelera-consent-change", sync);
    return () => { window.removeEventListener("storage", storage); window.removeEventListener("acelera-consent-change", sync); };
  }, [ready, region, path]);

  const choose = (advertising: boolean) => {
    const existing = readConsent();
    const visitorId = existing?.visitorId ?? crypto.randomUUID();
    const history: ConsentHistory = { visitorId, records: [...(existing?.records ?? []), {
      visitorId, advertising, region, decidedAt: new Date().toISOString(), noticeVersion: NOTICE_VERSION,
      noticeText: NOTICE_TEXT, choices: ["Aceitar", "Rejeitar"],
    }] };
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(history));
      window.dispatchEvent(new Event("acelera-consent-change"));
      setShowBanner(false); setSettings(false); setError("");
    } catch { setError("Não foi possível salvar sua escolha. Verifique as permissões de armazenamento do navegador."); }
  };
  const choices = <div className="flex flex-wrap gap-3">
    <Button variant="outline" onClick={() => choose(false)}>Rejeitar</Button>
    <Button variant="outline" onClick={() => choose(true)}>Aceitar</Button>
  </div>;
  void choices; void settings; void showBanner; void error;
  return null;
}
