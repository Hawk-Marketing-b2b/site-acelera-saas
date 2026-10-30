import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useContactDialog } from "@/components/ContactDialogProvider";
import logoAceleraSaas from "@/assets/logo-acelera-saas.png";
import logoMark from "@/assets/logo-mark.png";

const NAV_ITEMS = [
  { label: "Serviços", hash: "#servicos" },
  { label: "Método", hash: "#metodo" },
  { label: "Diferenciais", hash: "#diferenciais" },
  { label: "Depoimentos", hash: "#depoimentos" },
  { label: "Contato", hash: "#contato" },
];

function Wordmark() {
  return (
    <span className="font-display text-[15px] font-extrabold leading-none tracking-tight text-foreground">
      Acelera <span className="text-gradient-brand">SaaS</span>
    </span>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const { open } = useContactDialog();

  const solid = isScrolled || menuOpen;

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.hash.slice(1));

    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
      if (!isHome) {
        setActiveHash("");
        return;
      }
      const probe = window.scrollY + window.innerHeight * 0.32;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= probe) current = id;
      }
      setActiveHash(current ? `#${current}` : "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-background/95 shadow-header backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div
          className={`relative flex items-center justify-between transition-all duration-300 ${
            solid ? "h-16 lg:h-20" : "h-20 lg:h-28"
          }`}
        >
          <Link
            to="/"
            aria-label="Acelera SaaS — página inicial"
            className="relative flex h-full items-center"
          >
            {/* Telas pequenas: símbolo + nome digitado */}
            <span className="flex items-center gap-2.5 lg:hidden">
              <img src={logoMark} alt="" className="h-8 w-auto" />
              <Wordmark />
            </span>

            {/* Desktop: lockup empilhado no topo, símbolo + nome ao rolar */}
            <img
              src={logoAceleraSaas}
              alt="Acelera SaaS"
              className={`hidden h-full w-auto transition-opacity duration-300 lg:block ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 hidden items-center gap-2.5 transition-opacity duration-300 lg:flex ${
                isScrolled ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <img src={logoMark} alt="" className="h-9 w-auto" />
              <Wordmark />
            </span>
          </Link>

          <nav
            aria-label="Seções"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeHash === item.hash;
              return (
                <a
                  key={item.label}
                  href={navHref(item.hash)}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-button transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ShinyButton
              onClick={open}
              className="hidden px-5 py-2.5 text-[13px] sm:inline-flex lg:px-6 lg:py-3 lg:text-sm"
            >
              Falar com Especialista
            </ShinyButton>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              className="grid size-11 place-items-center rounded-full border border-border/60 bg-card/60 text-foreground backdrop-blur transition-colors duration-200 hover:border-primary/60 lg:hidden"
            >
              {menuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
          <span
            className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-button transition-opacity duration-300 ${
              solid ? "opacity-70" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Painel mobile */}
      <div
        id="menu-mobile"
        className={`overflow-hidden transition-[max-height] duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-[100vh]" : "max-h-0"
        }`}
      >
        <div
          onClick={(event) => {
            if (event.target === event.currentTarget) setMenuOpen(false);
          }}
          className="flex min-h-[calc(100vh-4rem)] flex-col bg-background/95 px-6 pb-10 pt-2 backdrop-blur-xl"
        >
          <nav
            aria-label="Seções (mobile)"
            className="flex flex-1 flex-col justify-center"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={navHref(item.hash)}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border/40 py-4 text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-200 last:border-b-0 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ShinyButton
            onClick={() => {
              setMenuOpen(false);
              open();
            }}
            className="mt-auto w-full justify-center"
          >
            Falar com Especialista
          </ShinyButton>
        </div>
      </div>

    </header>
  );
}
