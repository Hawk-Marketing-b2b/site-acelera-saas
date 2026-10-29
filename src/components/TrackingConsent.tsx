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
  return <>
    <div className="flex flex-wrap items-center justify-center gap-4 border-t border-border bg-background px-4 py-4 text-sm">
      <Link to="/privacidade" className="text-muted-foreground underline">Política de Privacidade</Link>
      <Button variant="link" onClick={() => setSettings(true)}>Configurações de cookies</Button>
    </div>
    {showBanner && <section aria-label="Consentimento de cookies" className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background p-5 shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1"><h2 className="mb-2 font-semibold">Sua privacidade</h2><p className="text-sm text-muted-foreground">{NOTICE_TEXT}</p>
          <Link to="/privacidade" className="text-sm underline">Política de Privacidade</Link></div>
        {choices}
      </div>
      {error && <p role="alert" className="text-destructive">{error}</p>}
    </section>}
    <Dialog open={settings} onOpenChange={setSettings}>
      <DialogContent><DialogHeader><DialogTitle>Configurações de cookies</DialogTitle></DialogHeader>
        <p className="text-sm text-muted-foreground">{NOTICE_TEXT}</p>
        <p className="text-sm">Preferência de publicidade: {readConsentSafeLabel(ready)}.</p>
        {choices}{error && <p role="alert" className="text-destructive">{error}</p>}
      </DialogContent>
    </Dialog>
  </>;
}

function readConsentSafeLabel(ready: boolean) {
  // Storage is read only after hydration; SSR and first client render use the same fallback.
  if (!ready) return "não definida";
  return "altere sua escolha abaixo";
}