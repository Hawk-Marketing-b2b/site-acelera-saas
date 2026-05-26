import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  const services = [
    { label: "Inbound Marketing", href: "/inbound-marketing" },
    { label: "Performance", href: "/performance" },
    { label: "Web Design", href: "/web-design" },
    { label: "Vendas", href: "/vendas" },
    { label: "Comercial", href: "/comercial" },
    { label: "IA e Automação", href: "/ia-e-automacao" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold text-foreground">Acelera SaaS</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Aceleramos o crescimento de empresas SaaS B2B com uma metodologia
              validada em mais de 400 projetos.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground">Serviços</h3>
            <ul className="mt-3 space-y-2">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground">Contato</h3>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>contato@acelerasaas.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Complexo Vinhedos, Sala 1508
                  <br />
                  Uberlândia – MG, CEP 38411-159
                </span>
              </li>
            </ul>
            <div className="mt-4 text-xs text-muted-foreground">
              <p>Hawk Comunicacao LTDA</p>
              <p>CNPJ 19.247.670/0001-35</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Acelera SaaS. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
