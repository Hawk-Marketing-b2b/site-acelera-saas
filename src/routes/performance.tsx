import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, ArrowDown, Target, BarChart3, Sparkles, TrendingUp, Search, Settings,
  LineChart, Rocket, Compass, Users, FileWarning, Activity, Crosshair,
  Repeat, FlaskConical, MousePointerClick, CheckCircle2, ChevronRight,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ScrollReveal } from "@/hooks/use-scroll-animation";
import {
import { useContactDialog } from "@/components/ContactDialogProvider";
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title: "Agência de Tráfego Pago para SaaS | Acelera SaaS" },
      { name: "description", content: "Agência de tráfego pago para SaaS. Escale a aquisição de clientes do seu software com Google Ads e Meta Ads orientados a dados e ROI." },
      { property: "og:title", content: "Agência de Tráfego Pago para SaaS | Acelera SaaS" },
      { property: "og:description", content: "Campanhas de Google Ads e Meta Ads focadas em ROI para empresas SaaS. Performance, previsibilidade e crescimento." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PerformancePage,
});

const problems = [
  { icon: Compass, title: "Não possuem estratégia clara" },
  { icon: Users, title: "Não segmentam corretamente o público" },
  { icon: FileWarning, title: "Não têm páginas otimizadas" },
  { icon: Activity, title: "Não analisam dados de forma contínua" },
];

const services = [
  { icon: Search, title: "Planejamento de campanhas", desc: "Diagnóstico, objetivos e plano de mídia conectado ao funil." },
  { icon: Target, title: "Público e segmentação", desc: "ICP, listas, lookalikes e segmentação por intenção." },
  { icon: Sparkles, title: "Criação de anúncios", desc: "Criativos e copies que falam a linguagem do seu SaaS." },
  { icon: Settings, title: "Otimização contínua", desc: "Ajustes semanais com base em sinais de conversão." },
  { icon: BarChart3, title: "Análise de performance", desc: "Dashboards com CAC, ROI e custo por lead em tempo real." },
  { icon: TrendingUp, title: "Escala previsível", desc: "Aumento de investimento sem perder eficiência." },
];

const strategies = [
  { icon: Crosshair, title: "Campanhas de fundo de funil" },
  { icon: Repeat, title: "Remarketing" },
  { icon: FlaskConical, title: "Testes A/B constantes" },
  { icon: MousePointerClick, title: "Otimização por conversão" },
];

const steps = [
  { n: "01", title: "Planejamento estratégico", icon: Search },
  { n: "02", title: "Estruturação de campanhas", icon: Settings },
  { n: "03", title: "Execução", icon: Rocket },
  { n: "04", title: "Otimização baseada em dados", icon: LineChart },
];

const metrics = [
  { k: "CAC", d: "Custo de Aquisição de Cliente", icon: Target },
  { k: "ROI", d: "Retorno sobre Investimento", icon: TrendingUp },
  { k: "CVR", d: "Taxa de conversão", icon: BarChart3 },
  { k: "CPL", d: "Custo por lead", icon: LineChart },
];

const faqs = [
  { q: "Tráfego pago funciona para qualquer SaaS?", a: "Funciona melhor para SaaS que já possuem uma oferta validada e páginas otimizadas para conversão." },
  { q: "Qual o investimento mínimo em anúncios?", a: "O valor depende do mercado e concorrência, mas o ideal é começar com um orçamento que permita testes e otimizações." },
  { q: "Em quanto tempo vejo retorno com tráfego pago?", a: "Os resultados podem começar rapidamente, mas a otimização contínua é essencial para melhorar o ROI ao longo do tempo." },
];

function PerformancePage() {
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
            Performance · Tráfego Pago
          </span>

          <h1 className="heading-gradient font-sans text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Agência de Tráfego Pago para SaaS
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: "120ms", animationFillMode: "both" }}
          >
            Escalone a aquisição de clientes do seu software com campanhas orientadas a dados e focadas em ROI.
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
            Como o tráfego pago transforma sua aquisição
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <ScrollReveal className="md:col-span-5" direction="left">
              <SectionHeading
                eyebrow="Definição"
                align="left"
                title={
                  <>
                    O que é <span className="text-gradient">tráfego pago</span>
                  </>
                }
              />
            </ScrollReveal>
            <ScrollReveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg" direction="right" delay={150}>
              <p>
                Tráfego pago é a estratégia de aquisição de clientes por meio de anúncios em plataformas como{" "}
                <span className="text-foreground">Google Ads e Meta Ads</span>.
              </p>
              <p>
                Para empresas de tecnologia, é uma forma rápida de gerar demanda e validar canais de aquisição.
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
                  Por que seus <span className="text-gradient">anúncios não performam</span>
                </>
              }
              description="Os bloqueios mais comuns que encontramos em operações de mídia paga para SaaS:"
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="group card-glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-destructive/15 text-destructive transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-foreground md:text-lg">
                    {p.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMO ATUAMOS */}
      <section id="metodo" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Metodologia"
              title={
                <>
                  Como funciona a <span className="text-gradient">gestão de tráfego pago</span>
                </>
              }
              description="Na Acelera SaaS, tratamos mídia paga como um canal estratégico de crescimento."
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
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
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
              eyebrow="Canais"
              title={
                <>
                  Estratégias de <span className="text-gradient">Google Ads e Meta Ads</span>
                </>
              }
              description="Combinamos canais de busca e descoberta para capturar demanda existente e gerar nova demanda qualificada."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {strategies.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="group card-glass flex gap-5 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 transition-transform duration-300 group-hover:scale-110">
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
                  Nosso processo de <span className="text-gradient">otimização de campanhas</span>
                </>
              }
              description="Quatro etapas conectadas que transformam o tráfego pago do seu SaaS em uma máquina previsível."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 150}>
                <div className="group card-glass relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <span className="font-display text-5xl font-extrabold heading-gradient-animated">{s.n}</span>
                  <div className="mt-4 grid size-10 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="size-5" />
                  </div>
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

      {/* MÉTRICAS / RESULTADOS */}
      <section className="relative bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Indicadores"
              title={
                <>
                  ROI e <span className="text-gradient">métricas de performance</span>
                </>
              }
              description="Acompanhamos os indicadores que de fato movem o crescimento do seu SaaS."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <ScrollReveal key={m.k} delay={i * 100} direction="scale">
                <div className="group card-glass rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                    <m.icon className="size-6 text-primary-foreground" />
                  </div>
                  <span className="mt-5 block font-display text-2xl font-extrabold text-foreground">{m.k}</span>
                  <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <ScrollReveal className="md:col-span-5" direction="left">
              <SectionHeading
                eyebrow="Investimento"
                align="left"
                title={
                  <>
                    Quanto custa investir em <span className="text-gradient">tráfego pago</span>
                  </>
                }
              />
            </ScrollReveal>
            <ScrollReveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg" direction="right" delay={150}>
              <p>
                O investimento varia conforme o mercado e os objetivos do seu SaaS, mas o foco é sempre o mesmo:{" "}
                <span className="text-foreground">maximizar o retorno sobre o investimento</span> e construir um canal de aquisição previsível.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-muted/20 px-6 py-24">
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
                Quer escalar sua aquisição de clientes com previsibilidade?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                Fale com um especialista da Acelera SaaS e descubra como transformar mídia paga no motor de crescimento do seu software.
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
