import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, ArrowDown, Target, Users, BarChart3, Workflow, Database, TrendingUp,
  DollarSign, CheckCircle2, Sparkles, Stethoscope, Gem, HeartPulse,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ScrollReveal } from "@/hooks/use-scroll-animation";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/vendas")({
  head: () => ({
    meta: [
      { title: "Consultoria de Vendas para SaaS | Acelera SaaS" },
      { name: "description", content: "Estruture o processo comercial do seu SaaS com nossa consultoria de vendas. Funil previsível, CRM e técnicas B2B para aumentar a receita." },
      { property: "og:title", content: "Consultoria de Vendas para SaaS | Acelera SaaS" },
      { property: "og:description", content: "Transforme oportunidades em clientes com um processo de vendas estruturado para empresas de tecnologia." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: VendasPage,
});

const problems = [
  { icon: Workflow, title: "Falta de processo", desc: "Vendedores improvisam e cada negociação segue um caminho diferente." },
  { icon: BarChart3, title: "Ausência de métricas", desc: "Sem indicadores claros, é impossível identificar gargalos no funil." },
  { icon: Users, title: "Abordagem inconsistente", desc: "Discurso e qualificação variam, gerando resultados imprevisíveis." },
];

const funnel = [
  { icon: Target, title: "Definição de etapas", desc: "Mapeamos cada fase do funil com critérios objetivos de avanço." },
  { icon: Users, title: "Qualificação de leads", desc: "Frameworks como BANT e MEDDIC adaptados ao seu ICP." },
  { icon: Workflow, title: "Padronização de abordagem", desc: "Playbooks, scripts e cadências replicáveis pelo time." },
];

const techniques = [
  { icon: Stethoscope, title: "Vendas consultivas", desc: "O vendedor atua como consultor, diagnosticando antes de propor." },
  { icon: Gem, title: "Abordagem orientada a valor", desc: "Foco em ROI e impacto no negócio, não em features." },
  { icon: HeartPulse, title: "Foco em dor do cliente", desc: "Toda conversa parte de um problema concreto e mensurável." },
];

const faqs = [
  { q: "Uma consultoria de vendas realmente aumenta a conversão?", a: "Sim. Quando aplicada corretamente, ela melhora processos, abordagem e acompanhamento, impactando diretamente os resultados." },
  { q: "Preciso de CRM para melhorar minhas vendas?", a: "Não é obrigatório, mas o uso de CRM facilita organização, acompanhamento e previsibilidade da operação comercial." },
  { q: "Esse serviço funciona para equipes pequenas?", a: "Sim. Inclusive, equipes menores costumam se beneficiar ainda mais de processos bem estruturados desde o início." },
];

function VendasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
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
            Consultoria de Vendas para SaaS
          </span>

          <h1 className="heading-gradient font-sans text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Consultoria de Vendas para aumentar a receita do seu SaaS
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: "120ms", animationFillMode: "both" }}
          >
            Estruture o processo comercial da sua empresa de tecnologia e transforme oportunidades em clientes com previsibilidade.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: "220ms", animationFillMode: "both" }}
          >
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
              style={{
                background: "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
                boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
              }}
            >
              Falar com especialista
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div
            className="mt-16 flex items-center justify-center gap-2 text-xs text-muted-foreground animate-in fade-in duration-700"
            style={{ animationDelay: "320ms", animationFillMode: "both" }}
          >
            <ArrowDown className="size-3 animate-float" />
            Como estruturamos seu processo de vendas
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <ScrollReveal className="md:col-span-5" direction="left">
              <SectionHeading
                eyebrow="Processo"
                align="left"
                title={
                  <>
                    O que é um <span className="text-gradient">processo de vendas eficiente</span>
                  </>
                }
              />
            </ScrollReveal>
            <ScrollReveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg" direction="right" delay={150}>
              <p>
                Um processo estruturado garante <span className="text-foreground">previsibilidade e escala</span> — cada etapa do funil é desenhada para mover o lead com clareza até o fechamento.
              </p>
              <p>
                Isso elimina improviso e a dependência de talentos individuais, transformando vendas em um sistema replicável.
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
              eyebrow="Problemas"
              title={
                <>
                  Por que sua equipe <span className="text-gradient">não converte</span>
                </>
              }
              description="Os bloqueios mais comuns que travam operações comerciais em SaaS B2B."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="group card-glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid size-12 place-items-center rounded-xl bg-destructive/15 text-destructive transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FUNIL */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Estrutura"
              title={
                <>
                  Como estruturamos seu <span className="text-gradient">funil de vendas</span>
                </>
              }
              description="Um funil claro, com critérios objetivos e abordagem padronizada do topo ao fechamento."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {funnel.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80} direction="scale">
                <div className="card-glass group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TÉCNICAS */}
      <section className="relative bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Técnicas"
              title={
                <>
                  Técnicas de <span className="text-gradient">vendas B2B</span>
                </>
              }
              description="Métodos consultivos e orientados a valor para ciclos de venda complexos em tecnologia."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {techniques.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="group card-glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid size-12 place-items-center rounded-xl border border-primary/30 bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <t.icon className="size-5 text-purple-light" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CRM */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <ScrollReveal className="md:col-span-5" direction="left">
              <SectionHeading
                eyebrow="Ferramentas"
                align="left"
                title={
                  <>
                    Implementação de <span className="text-gradient">CRM</span>
                  </>
                }
              />
            </ScrollReveal>
            <ScrollReveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg" direction="right" delay={150}>
              <p>
                Organizamos e estruturamos seu processo dentro de ferramentas como{" "}
                <span className="text-foreground">HubSpot, Pipedrive e RD Station</span> — com automações, dashboards e integrações que dão visibilidade total da operação.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CONVERSÃO + PREÇO */}
      <section className="relative bg-muted/20 px-6 py-24">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <div className="group card-glass h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                <TrendingUp className="size-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                Como melhorar sua taxa de conversão
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Com processos claros, qualificação rigorosa e acompanhamento de dados em cada etapa do funil — identificamos onde os leads caem e atacamos o gargalo certo.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="group card-glass h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                <DollarSign className="size-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                Quanto custa uma consultoria de vendas
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                O investimento varia conforme o nível de maturidade da operação, tamanho do time e escopo do projeto. Fale com nosso especialista para um diagnóstico e proposta personalizada.
              </p>
            </div>
          </ScrollReveal>
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
                Quer transformar suas vendas em uma máquina previsível?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                Vamos diagnosticar seu funil, desenhar a estratégia e executar com você o processo de vendas que o seu SaaS precisa.
              </p>

              <div className="mt-10 flex items-center justify-center">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
                    boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
                  }}
                >
                  Falar com especialista
                  <ArrowRight className="w-5 h-5" />
                </a>
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
