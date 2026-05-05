import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-button shadow-button">
              <span className="font-display text-xl font-extrabold text-primary-foreground">A</span>
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              Acelera<span className="text-gradient">SaaS</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Aceleramos o crescimento de empresas SaaS B2B com uma metodologia validada em mais de 400
            projetos. Sua parceira estratégica para dominar o mercado.
          </p>
          <a
            href="https://instagram.com/acelerasaas"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
          >
            <Instagram className="size-4" />
          </a>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="font-display text-sm font-semibold text-foreground">Links Rápidos</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="#metodo" className="transition-colors hover:text-foreground">Método</a>
            </li>
            <li>
              <Link to="/inbound-marketing" className="transition-colors hover:text-foreground">
                Inbound Marketing
              </Link>
            </li>
            <li>
              <a href="#cta-final" className="transition-colors hover:text-foreground">Contato</a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-display text-sm font-semibold text-foreground">Contato</h3>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-primary/70" />
              contato@acelerasaas.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="size-4 shrink-0 mt-0.5 text-primary/70" />
              <span>
                Complexo Vinhedos, Sala 1508
                <br />
                Uberlândia – MG, CEP 38411-159
              </span>
            </li>
          </ul>
          <div className="mt-5 text-xs text-muted-foreground/70">
            <p>Hawk Comunicacao LTDA</p>
            <p>CNPJ 19.247.670/0001-35</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Acelera SAAS. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <span className="transition-colors hover:text-foreground cursor-pointer">Política de Privacidade</span>
            <span className="transition-colors hover:text-foreground cursor-pointer">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
