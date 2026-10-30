import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Monitor,
  Briefcase,
  Users,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import HeroSection from "@/components/HeroSection";
import AllClientsSection from "@/components/AllClientsSection";
import StatsSection from "@/components/StatsSection";
import MethodSection from "@/components/MethodSection";
import TrainingSection from "@/components/TrainingSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agência de Marketing para SaaS | Acelera SaaS" },
      { name: "description", content: "Agência de marketing para SaaS B2B. Geramos demanda qualificada com metodologia validada em mais de 400 projetos." },
      { property: "og:title", content: "Agência de Marketing para SaaS | Acelera SaaS" },
      { property: "og:description", content: "Agência de marketing para SaaS B2B. Geramos demanda qualificada com metodologia validada em mais de 400 projetos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    icon: TrendingUp,
    title: "Inbound Marketing",
    program: "Máquina de Demanda",
    desc: "Atraia leads qualificados com estratégias de conteúdo, SEO e nutrição que geram demanda previsível para o seu SaaS.",
    href: "/inbound-marketing",
    items: [
      "Conteúdo e SEO orientados a SaaS",
      "Iscas digitais e materiais ricos",
      "Nutrição de leads e automação",
      "Métricas focadas em pipeline",
    ],
  },
  {
    icon: Target,
    title: "Performance",
    program: "Tráfego Pago B2B",
    desc: "Campanhas de mídia paga otimizadas para CAC baixo e alto retorno. Google, Meta e LinkedIn com foco em resultado B2B.",
    href: "/performance",
    items: [
      "Google, Meta e LinkedIn Ads",
      "Otimização para CAC baixo",
      "Remarketing e funil completo",
      "Relatórios de retorno recorrentes",
    ],
  },
  {
    icon: Monitor,
    title: "Web Design",
    program: "Site que Vende",
    desc: "Sites e landing pages de alta conversão, pensados para o mercado SaaS. Design que vende, não só impressiona.",
    href: "/web-design",
    items: [
      "Sites e landing pages de conversão",
      "Copywriting orientado a venda",
      "Design pensado para SaaS B2B",
      "Testes de melhoria contínua",
    ],
  },
  {
    icon: Users,
    title: "Vendas",
    program: "Playbook Comercial",
    desc: "Estruture seu processo comercial com metodologia, playbooks e treinamento para fechar mais contratos recorrentes.",
    href: "/vendas",
    items: [
      "Metodologia e playbook comercial",
      "Treinamento do time de vendas",
      "Pipeline e CRM organizados",
      "Prospecção ativa e follow-up",
    ],
  },
  {
    icon: Briefcase,
    title: "Comercial",
    program: "Times de Alta Performance",
    desc: "Construção e gestão de times de vendas, SDR e CS para empresas SaaS que querem escalar com previsibilidade.",
    href: "/comercial",
    items: [
      "Construção de times de SDR e vendas",
      "Contratação e onboarding",
      "Gestão de rotina e metas",
      "Previsibilidade de receita",
    ],
  },
  {
    icon: Zap,
    title: "I.A",
    program: "Operação com IA",
    desc: "Automatize processos, qualifique leads e escale operações com inteligência artificial aplicada ao contexto B2B SaaS.",
    href: "/ia-e-automacao",
    items: [
      "Automação de processos e rotinas",
      "Qualificação de leads com IA",
      "Agentes e integrações sob medida",
      "Escala sem aumentar o time",
    ],
  },
] as const;

function EcosystemGrid() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-5 pl-11 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:pl-0 xl:pt-36">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.href}
              to={s.href}
              className="card-glass relative flex h-full min-w-0 flex-col gap-4 rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-button shadow-button">
                  <Icon className="size-5 text-primary-foreground" />
                </div>
                <span
                  aria-hidden="true"
                  className="font-display text-4xl font-extrabold leading-none text-foreground/10"
                >
                  {`0${i + 1}`}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-accent">
                  {s.program}
                </p>
              </div>
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <ul className="mt-auto space-y-2 text-sm text-muted-foreground">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-purple-light/60"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      <section id="servicos" className="relative overflow-hidden px-6 py-24">
        <div aria-hidden="true" className="eco-glow-top" />
        <div aria-hidden="true" className="eco-floor" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground mb-6">
              Nossos Serviços
            </span>
            <h2 className="h2-section heading-gradient mb-4">
              Tudo que seu SaaS precisa para crescer
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Do marketing à automação — soluções integradas para acelerar suas vendas B2B.
            </p>
          </div>
          <EcosystemGrid />

          <div className="mt-16 text-center">
            <p className="text-base text-muted-foreground">
              Você entra no estágio em que está: ideia, primeiros clientes, tração ou escala.
            </p>
            <a
              href="#contato"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-button px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-button transition-transform duration-200 hover:scale-105"
            >
              Quero meu diagnóstico
            </a>
            <p className="mt-6 text-[13px] text-muted-foreground/70">
              Grupo HardWork Company: AceleraSaaS · Hawk Marketing · NoraLabs · AtendeBot
            </p>
          </div>
        </div>
      </section>

      <AllClientsSection />
      <StatsSection />
      <MethodSection />
      <TrainingSection />
      <ComparisonSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
