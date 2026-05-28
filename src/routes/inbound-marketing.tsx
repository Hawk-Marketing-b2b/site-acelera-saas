import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Workflow,
  FileSearch,
  PenTool,
  Layout,
  Zap,
  Database,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  ChevronRight,
  MousePointerClick,
  Filter,
  FileX,
  UserX,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import { SectionHeading } from "@/components/site/SectionHeading";

import { ScrollReveal } from "@/hooks/use-scroll-animation";
import {
import { useContactDialog } from "@/components/ContactDialogProvider";
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const META_TITLE = "Agência de Inbound Marketing para SaaS | Acelera SaaS";
const META_DESCRIPTION =
  "Agência de inbound marketing especializada em SaaS B2B. Atraia leads qualificados, estruture funis de conversão e transforme seu marketing em um canal previsível de receita.";

export const Route = createFileRoute("/inbound-marketing")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESCRIPTION },
      {
        name: "keywords",
        content:
          "agência de inbound marketing, inbound marketing para SaaS, marketing para SaaS B2B, geração de leads SaaS, funil de conversão SaaS",
      },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: META_TITLE },
      { name: "twitter:description", content: META_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://acelerasaas.com/inbound-marketing" }],
  }),
  component: InboundMarketingPage,
});

const problems = [
  { icon: MousePointerClick, title: "Tráfego sem conversão" },
  { icon: Filter, title: "Falta de um funil estruturado" },
  { icon: FileX, title: "Ausência de estratégia de conteúdo" },
  { icon: UserX, title: "Leads desqualificados" },
];

const services = [
  { icon: Target, title: "Planejamento estratégico" },
  { icon: Search, title: "SEO e conteúdo" },
  { icon: Layout, title: "Criação de landing pages" },
  { icon: Zap, title: "Automação de marketing" },
  { icon: Database, title: "Integração com CRM" },
];

const strategies = [
  { icon: PenTool, title: "Produção de conteúdo otimizado para SEO" },
  { icon: Workflow, title: "Criação de funis de conversão" },
  { icon: Users, title: "Automação de nutrição de leads" },
  { icon: BarChart3, title: "Análise contínua de performance" },
];

const steps = [
  { n: "01", title: "Diagnóstico" },
  { n: "02", title: "Planejamento" },
  { n: "03", title: "Execução" },
  { n: "04", title: "Otimização" },
];

const results = [
  { icon: TrendingUp, title: "Aumento de leads qualificados" },
  { icon: Target, title: "Melhora na conversão" },
  { icon: BarChart3, title: "Redução do CAC" },
  { icon: Zap, title: "Crescimento previsível" },
];

const faqs = [
  {
    q: "Inbound marketing funciona para empresas SaaS?",
    a: "Sim. O inbound marketing é especialmente eficiente para SaaS, pois educa o público, gera demanda qualificada e apoia ciclos de venda mais longos.",
  },
  {
    q: "Quanto tempo leva para gerar leads com inbound?",
    a: "Os primeiros resultados costumam aparecer entre 3 e 6 meses, com crescimento consistente ao longo do tempo.",
  },
  {
    q: "Preciso produzir muito conteúdo para ter resultado?",
    a: "Não necessariamente. O mais importante é ter consistência e estratégia, com conteúdos focados no seu público ideal.",
  },
];

function InboundMarketingPage() {
  const { open: openContactDialog } = useContactDialog();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float-slower"
        />

        <div className="container mx-auto max-w-5xl px-6 py-24 md:py-32 relative flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-purple-light backdrop-blur animate-in fade-in duration-700">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            Inbound Marketing para SaaS
          </span>

          <h1 className="heading-gradient font-sans text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Agência de Inbound Marketing
            <br className="hidden md:block" /> para SaaS
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: "120ms", animationFillMode: "both" }}
          >
            Atraia clientes ideais e transforme o marketing do seu software em um canal previsível
            de geração de leads.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: "220ms", animationFillMode: "both" }}
          >
            <button type="button" onClick={openContactDialog} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95" style={{
                background: "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
                boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
              }}>Falar com especialista<ArrowRight className="w-5 h-5" /></button>
          </div>

          <div
            className="mt-16 flex items-center justify-center gap-2 text-xs text-muted-foreground animate-in fade-in duration-700"
            style={{ animationDelay: "320ms", animationFillMode: "both" }}
          >
            <ArrowDown className="size-3 animate-float" />
            Como o inbound transforma seu marketing
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <ScrollReveal className="md:col-span-5" direction="left">
              <SectionHeading
                eyebrow="O conceito"
                align="left"
                title={
                  <>
                    O que é <span className="text-gradient">inbound marketing</span> e como ele
                    funciona
                  </>
                }
              />
            </ScrollReveal>
            <ScrollReveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg" direction="right" delay={150}>
              <p>
                Inbound marketing é uma estratégia focada em{" "}
                <span className="text-foreground">atrair, engajar e converter clientes</span> por
                meio de conteúdo relevante ao longo da jornada de compra.
              </p>
              <p>
                Para empresas de tecnologia, isso significa gerar leads qualificados de forma
                contínua e reduzir a dependência de mídia paga.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="relative bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Diagnóstico"
              title={
                <>
                  Por que sua empresa <span className="text-gradient">não gera leads qualificados</span> hoje
                </>
              }
              description="Antes de produzir conteúdo, é preciso entender o que está travando o funil. Os bloqueios mais comuns que encontramos em SaaS B2B:"
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="card-glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center gap-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-destructive/15 text-destructive">
                      <p.icon className="size-5" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground md:text-lg">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
              Sem uma estratégia clara, o marketing não gera resultados consistentes — apenas
              esforço.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* COMO ATUAMOS */}
      <section id="metodo" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Nossa atuação"
              title={
                <>
                  Como nossa <span className="text-gradient">agência de inbound marketing</span> atua
                </>
              }
              description="Na Acelera SaaS, estruturamos o inbound como um processo completo, integrado e mensurável."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80} direction="scale">
                <div className="card-glass group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRATÉGIAS */}
      <section className="relative bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Estratégias"
              title={
                <>
                  Estratégias de inbound marketing que <span className="text-gradient">utilizamos</span>
                </>
              }
              description="Combinamos conteúdo, dados e tecnologia para construir um motor de aquisição previsível."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {strategies.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="card-glass flex gap-5 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <s.icon className="size-5 text-purple-light" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Processo"
              title={
                <>
                  Como <span className="text-gradient">funciona</span> nosso processo
                </>
              }
              description="Quatro etapas conectadas que transformam o marketing do seu SaaS em uma máquina previsível."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 150}>
                <div className="card-glass relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <span className="font-display text-5xl font-extrabold heading-gradient-animated">{s.n}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>

                  {i < steps.length - 1 && (
                    <ChevronRight className="absolute right-3 top-1/2 hidden size-5 -translate-y-1/2 text-primary/50 lg:block animate-subtle-pulse" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="relative bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Resultados"
              title={
                <>
                  Resultados que você <span className="text-gradient">pode esperar</span>
                </>
              }
              description="Trabalhamos com indicadores claros — desde o topo do funil até a receita gerada."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {results.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 100} direction="scale">
                <div className="card-glass rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-button shadow-button transition-transform duration-300 hover:scale-110">
                    <r.icon className="size-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                    {r.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Perguntas <span className="text-gradient">frequentes</span>
                </>
              }
            />
          </ScrollReveal>

          <Accordion type="single" collapsible className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <AccordionItem
                  value={`item-${i}`}
                  className="card-glass rounded-2xl border-none px-6 [&>h3]:font-display"
                >
                  <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="px-6 pb-32">
        <div className="mx-auto max-w-5xl">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-primary/30 bg-card/40 p-10 md:p-16 backdrop-blur-xl shadow-[0_30px_80px_-20px_hsl(283_76%_54%/0.45)]">
            <div
              className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-accent)" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-accent)" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              }}
              aria-hidden
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-purple-light backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Vamos acelerar seu SaaS
              </div>

              <h2 className="heading-gradient-animated mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                Quer transformar seu marketing em uma máquina de geração de leads?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                Vamos diagnosticar seu funil, desenhar a estratégia e executar com você o
                inbound que o seu SaaS precisa — com método validado em mais de 400 projetos.
              </p>

              <div className="mt-10 flex items-center justify-center">
              <button type="button" onClick={openContactDialog} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95" style={{
                  background:
                    "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
                  boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
                }}>Falar com especialista<ArrowRight className="w-5 h-5" /></button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-purple-light" />
                  Resposta em até 24h
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-purple-light" />
                  Diagnóstico gratuito
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-purple-light" />
                  Especialistas em SaaS B2B
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
