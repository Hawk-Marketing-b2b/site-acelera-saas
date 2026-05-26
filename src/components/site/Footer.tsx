import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";
import logoAceleraSaas from "@/assets/logo-acelera-saas.png";
import sedeImg from "@/assets/sede-uberlandia.jpg";

const services = [
  { label: "Inbound Marketing", href: "/inbound-marketing" },
  { label: "Performance", href: "/performance" },
  { label: "Web Design", href: "/web-design" },
  { label: "Vendas", href: "/vendas" },
  { label: "Comercial", href: "/comercial" },
  { label: "IA e Automação", href: "/ia-e-automacao" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoAceleraSaas} alt="Acelera SaaS" className="h-24 w-auto" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              Aceleramos o crescimento de empresas SaaS B2B com uma metodologia validada em mais de 400 projetos. Sua parceira estratégica para dominar o mercado.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/acelerasaas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 mb-5">
              <li>
                <a
                  href="mailto:contato@acelerasaas.com"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  contato@acelerasaas.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Complexo Vinhedos, Sala 1508
                  <br />
                  Uberlândia - MG, CEP 38411-159
                </span>
              </li>
            </ul>
            <p className="text-white/40 text-xs mb-1">Hawk Comunicacao LTDA</p>
            <p className="text-white/40 text-xs mb-4">CNPJ 19.247.670/0001-35</p>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src={sedeImg}
                alt="Sede Acelera SaaS - Complexo Vinhedos, Uberlândia-MG"
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Acelera SaaS. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
