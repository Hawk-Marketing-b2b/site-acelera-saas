import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Target, Shuffle, GaugeCircle, Unplug, Workflow, LineChart,
  Users, Rocket, CheckCircle2, Sparkles, ArrowDown,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

export const Route = createFileRoute("/comercial")({
  head: () => ({
    meta: [
      { title: "Estruturação Comercial para SaaS | Acelera SaaS" },
      { name: "description", content: "Estruturação comercial para SaaS: organize processos, pipeline, métricas e equipe de vendas para escalar seu SaaS com previsibilidade." },
      { property: "og:title", content: "Estruturação Comercial para SaaS | Acelera SaaS" },
      { property: "og:description", content: "Organize a área comercial da sua empresa de tecnologia e crie um processo escalável de vendas." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ComercialPage,
});

function ComercialPage() {
  const errors = [
    { icon: Shuffle, title: "Falta de processo", desc: "Vendas dependem do esforço individual e não se repetem com previsibilidade." },
    { icon: GaugeCircle, title: "Ausência de métricas", desc: "Sem indicadores claros, é impossível identificar gargalos e otimizar resultados." },
    { icon: Unplug, title: "Desalinhamento com marketing", desc: "Leads chegam desqualificados e o time comercial perde tempo com oportunidades frias." },
  ];

  const steps = [
    { icon: Workflow, title: "Definição de etapas", desc: "Mapeamos a jornada de compra do seu SaaS e desenhamos um pipeline coerente com o seu ciclo." },
    { icon: CheckCircle2, title: "Padronização", desc: "Playbooks, scripts e critérios de qualificação que garantem consistência em todo o time." },
    { icon: LineChart, title: "Acompanhamento", desc: "Rituais de gestão, forecast e métricas que tornam a operação previsível e escalável." },
  ];

  const faqs = [
    { q: "Qual a diferença entre vendas e estruturação comercial?", a: "Vendas é a execução. Estruturação comercial é a organização do processo, equipe e métricas que sustentam as vendas." },
    { q: "Quando minha empresa precisa estruturar a área comercial?", a: "Quando há crescimento desorganizado, dificuldade em escalar ou falta de previsibilidade nos resultados." },
    { q: "É possível estruturar o comercial sem aumentar a equipe?", a: "Sim. Muitas vezes, melhorias em processo e organização já geram grandes ganhos de eficiência." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero">
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
              Serviço · Comercial
            </span>

            <h1 className="heading-gradient font-sans text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Estruturação Comercial para SaaS
            </h1>

            <p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              Organize a área comercial da sua empresa de tecnologia e crie um processo escalável de vendas.
            </p>

            <div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: "220ms", animationFillMode: "both" }}
            >
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                style={{
                  background: "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
                  boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
                }}
              >
                Falar com especialista
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div
              className="mt-16 flex items-center justify-center gap-2 text-xs text-muted-foreground animate-in fade-in duration-700"
              style={{ animationDelay: "320ms", animationFillMode: "both" }}
            >
              <ArrowDown className="size-3 animate-float" />
              Como estruturamos sua área comercial
            </div>
          </div>
        </section>

        {/* O que é */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-12 md:grid-cols-12">
              <ScrollReveal className="md:col-span-5" direction="left">
                <SectionHeading
                  eyebrow="O que é"
                  align="left"
                  title={
                    <>
                      O que é <span className="text-gradient">estrutura comercial</span>
                    </>
                  }
                />
              </ScrollReveal>
              <ScrollReveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg" direction="right" delay={150}>
                <p>
                  É a base que sustenta o crescimento das vendas. Reúne{" "}
                  <span className="text-foreground">processos, pessoas, métricas e ferramentas</span>{" "}
                  que transformam o esforço individual em uma máquina previsível de aquisição de clientes para o seu SaaS.
                </p>
              </ScrollReveal>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "Processo", v: "Padronizado" },
                { k: "Pipeline", v: "Visível" },
                { k: "Métricas", v: "Acionáveis" },
                { k: "Equipe", v: "Alinhada" },
              ].map((item, i) => (
                <ScrollReveal key={item.k} delay={i * 80} direction="scale">
                  <div className="card-glass rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.k}</div>
                    <div className="mt-1 font-display text-lg font-semibold">{item.v}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Erros comuns */}
        <section className="relative bg-muted/20 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Problemas"
                title={
                  <>
                    Erros comuns na <span className="text-gradient">área comercial</span>
                  </>
                }
                description="Antes de escalar, é preciso resolver os problemas que travam a sua operação."
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {errors.map((e, i) => (
                <ScrollReveal key={e.title} delay={i * 100}>
                  <div className="card-glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                      <e.icon className="size-5 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{e.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Como organizar */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Método"
                title={
                  <>
                    Como organizar o <span className="text-gradient">processo de vendas</span> do seu SaaS
                  </>
                }
                description="Um método claro para sair do caos operacional e construir uma operação repetível."
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 120}>
                  <div className="card-glass relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-display text-sm font-bold transition-transform duration-300 group-hover:scale-110">
                      0{i + 1}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pipeline e métricas */}
        <section className="relative bg-muted/20 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <ScrollReveal direction="left">
                <div className="card-glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  {[
                    { label: "Leads gerados", value: "100%", w: "w-full" },
                    { label: "Qualificados (MQL)", value: "62%", w: "w-[62%]" },
                    { label: "Oportunidades (SQL)", value: "34%", w: "w-[34%]" },
                    { label: "Propostas enviadas", value: "21%", w: "w-[21%]" },
                    { label: "Fechamentos", value: "9%", w: "w-[9%]" },
                  ].map((row) => (
                    <div key={row.label} className="mb-4 last:mb-0">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{row.label}</span>
                        <span className="font-medium">{row.value}</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full rounded-full bg-muted overflow-hidden">
                        <div className={"h-full rounded-full bg-gradient-button " + row.w} />
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={150}>
                <SectionHeading
                  eyebrow="Indicadores"
                  align="left"
                  title={
                    <>
                      Pipeline e <span className="text-gradient">métricas comerciais</span>
                    </>
                  }
                  description="Acompanhamos os indicadores certos em cada etapa do funil para identificar gargalos, prever receita e otimizar continuamente os resultados do seu time de vendas."
                />
                <ul className="mt-6 space-y-3">
                  {["Taxa de conversão por etapa do funil", "Ciclo médio de vendas e ticket médio", "CAC, LTV e payback do investimento comercial"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Equipe e escala */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <ScrollReveal direction="left">
                <div className="card-glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                    <Users className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    Como montar uma equipe comercial
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Estruturamos papéis e responsabilidades — SDR, Closer, Customer Success — alinhados ao estágio e ao modelo de receita do seu SaaS.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={150}>
                <div className="card-glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                    <Rocket className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    Estratégias para escalar vendas
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Com processos claros, previsibilidade e gestão por dados, o seu SaaS cresce de forma sustentável e com unit economics saudável.
                  </p>
                </div>
              </ScrollReveal>
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
                    Perguntas <span className="text-gradient">frequentes</span> — Comercial
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

        {/* Final CTA */}
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
                  Quer estruturar sua área comercial?
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                  Vamos conversar sobre o momento do seu SaaS e desenhar o próximo passo da sua operação de vendas — com método validado em mais de 400 projetos.
                </p>

                <div className="mt-10 flex items-center justify-center">
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
                      boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
                    }}
                  >
                    Falar com especialista
                    <ArrowRight className="w-5 h-5" />
                  </button>
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
      </main>

      <Footer />
    </div>
  );
}
