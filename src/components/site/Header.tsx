import { Link } from "@tanstack/react-router";
import { CTAButton } from "./CTAButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-button shadow-button">
            <span className="font-display text-xl font-extrabold text-primary-foreground">A</span>
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            Acelera<span className="text-gradient">SaaS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-sm font-medium text-foreground" }}
          >
            Início
          </Link>
          <Link
            to="/inbound-marketing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-sm font-medium text-foreground" }}
          >
            Inbound
          </Link>
          <Link
            to="/performance"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-sm font-medium text-foreground" }}
          >
            Performance
          </Link>
          <Link
            to="/web-design"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-sm font-medium text-foreground" }}
          >
            Web Design
          </Link>
          <Link
            to="/vendas"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-sm font-medium text-foreground" }}
          >
            Vendas
          </Link>
          <Link
            to="/comercial"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-sm font-medium text-foreground" }}
          >
            Comercial
          </Link>
          <Link
            to="/ia-e-automacao"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-sm font-medium text-foreground" }}
          >
            IA e Automação
          </Link>
        </nav>

        <CTAButton size="sm">Falar com especialista</CTAButton>
      </div>
    </header>
  );
}
