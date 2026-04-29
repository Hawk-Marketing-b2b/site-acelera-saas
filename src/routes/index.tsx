import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Sparkles, Workflow, TrendingUp } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTAButton } from "@/components/site/CTAButton";
import { BackgroundFx } from "@/components/site/BackgroundFx";
import { SectionHeading } from "@/components/site/SectionHeading";

const META_TITLE = "Acelera SaaS | Agência de Marketing e Vendas para SaaS B2B";
const META_DESCRIPTION =
  "Geramos demanda qualificada para empresas de software B2B com metodologia validada em mais de 400 projetos e 20 anos de experiência.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESCRIPTION },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Target,
    title: "Inbound Marketing",
    desc: "Atraia leads qualificados com conteúdo e SEO orientados ao seu ICP.",
    href: "/inbound-marketing" as const,
  },
  {
    icon: Sparkles,
    title: "Mídia Paga para SaaS",
    desc: "Campanhas de aquisição focadas em CAC, payback e LTV.",
  },
  {
    icon: Workflow,
    title: "RevOps & CRM",
    desc: "Marketing, vendas e CS conectados em um único motor de receita.",
  },
  {
    icon: TrendingUp,
    title: "CRO & Landing Pages",
    desc: "Páginas e jornadas otimizadas para converter mais com o mesmo tráfego.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden bg-gradient-hero">
        <BackgroundFx />
        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 text-center md:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary animate-subtle-pulse" />O maior
            ecossistema de vendas para SaaS
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Acelere as Vendas do seu{" "}
            <span className="heading-gradient">SaaS</span>
            <br className="hidden md:block" /> e Domine o Mercado
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Geramos demanda qualificada para empresas de software B2B com uma metodologia validada
            em mais de <span className="font-semibold text-foreground">400 projetos</span> e{" "}
            <span className="font-semibold text-foreground">20 anos</span> de experiência.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton size="lg">Quero acelerar meu SaaS</CTAButton>
            <CTAButton href="#servicos" variant="outline" size="lg" showIcon={false}>
              Ver serviços
            </CTAButton>
          </div>
        </div>
      </section>

      <section id="servicos" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Serviços"
            title={
              <>
                Soluções completas para <span className="text-gradient">SaaS B2B</span>
              </>
            }
            description="Da geração de demanda à retenção: estruturamos cada peça do seu motor de receita."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const card = (
                <div className="card-glass group h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button">
                    <s.icon className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  {s.href && (
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-purple-light transition-colors group-hover:text-foreground">
                      Saiba mais <ArrowRight className="size-4" />
                    </span>
                  )}
                </div>
              );
              return s.href ? (
                <Link key={s.title} to={s.href} className="block h-full">
                  {card}
                </Link>
              ) : (
                <div key={s.title}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-muted/20 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3">
          {[
            { n: "+400", l: "SaaS atendidos" },
            { n: "+R$ 1 Bi", l: "em aumento de receita" },
            { n: "+R$ 40 mi", l: "investidos em anúncios" },
          ].map((s) => (
            <div key={s.l} className="card-glass rounded-2xl p-10">
              <div className="font-display text-5xl font-extrabold heading-gradient">{s.n}</div>
              <p className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
