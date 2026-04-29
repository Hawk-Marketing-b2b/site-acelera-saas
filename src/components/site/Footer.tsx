import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-border/50 bg-background"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-button shadow-button">
              <span className="font-display text-xl font-extrabold text-primary-foreground">A</span>
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              Acelera<span className="text-gradient">SaaS</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            O maior ecossistema de vendas para SaaS. Geramos demanda qualificada para empresas de
            software B2B com metodologia validada em mais de 400 projetos.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-foreground">Serviços</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/inbound-marketing" className="transition-colors hover:text-foreground">
                Inbound Marketing
              </Link>
            </li>
            <li>Mídia Paga para SaaS</li>
            <li>SEO Técnico</li>
            <li>RevOps & CRM</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-foreground">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>contato@acelerasaas.com</li>
            <li>São Paulo · Brasil</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Acelera SaaS. Todos os direitos reservados.</span>
          <span>Performance · Velocidade · Precisão</span>
        </div>
      </div>
    </footer>
  );
}
