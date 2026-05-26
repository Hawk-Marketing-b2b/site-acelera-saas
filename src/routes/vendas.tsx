import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight, Target, Users, BarChart3, Workflow, Database, TrendingUp,
  DollarSign, CheckCircle2, Sparkles, Stethoscope, Gem, HeartPulse,
} from "lucide-react";
import { Footer } from "@/components/site/Footer";

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

function VendasPage() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero">
          <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-6xl">
                Consultoria de Vendas para SaaS
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Consultoria de Vendas para aumentar a receita do seu SaaS
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Estruture o processo comercial da sua empresa de tecnologia e transforme oportunidades em clientes com previsibilidade.
              </p>
              <div className="mt-10 flex justify-center">
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                  style={{
                    background: "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
                    boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
                  }}
                >
                  Falar com Especialista
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What is an efficient sales process */}
        <Section className="py-20">
          <SectionTitle eyebrow="Processo">
            O que é um processo de vendas eficiente
          </SectionTitle>
          <p className="mt-4 max-w-2xl text-center text-muted-foreground">
            Um processo estruturado garante previsibilidade e escala — cada etapa do funil é desenhada para mover o lead com clareza até o fechamento, eliminando improviso e dependência de talentos individuais.
          </p>
        </Section>

        {/* Why your team doesn't convert */}
        <Section className="py-20">
          <SectionTitle eyebrow="Problemas">
            Por que sua equipe não converte
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-3 mt-8">
            {[
              { icon: Workflow, title: "Falta de processo", desc: "Vendedores improvisam e cada negociação segue um caminho diferente." },
              { icon: BarChart3, title: "Ausência de métricas", desc: "Sem indicadores claros, é impossível identificar gargalos no funil." },
              { icon: Users, title: "Abordagem inconsistente", desc: "Discurso e qualificação variam, gerando resultados imprevisíveis." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* How we structure your sales funnel */}
        <Section className="py-20">
          <SectionTitle eyebrow="Estrutura">
            Como estruturamos seu funil de vendas
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-3 mt-8">
            {[
              { icon: Target, title: "Definição de etapas", desc: "Mapeamos cada fase do funil com critérios objetivos de avanço." },
              { icon: Users, title: "Qualificação de leads", desc: "Frameworks como BANT e MEDDIC adaptados ao seu ICP." },
              { icon: Workflow, title: "Padronização de abordagem", desc: "Playbooks, scripts e cadências replicáveis pelo time." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* B2B sales techniques */}
        <Section className="py-20">
          <SectionTitle eyebrow="Técnicas">
            Técnicas de vendas B2B
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-3 mt-8">
            {[
              { icon: Stethoscope, title: "Vendas consultivas", desc: "O vendedor atua como consultor, diagnosticando antes de propor." },
              { icon: Gem, title: "Abordagem orientada a valor", desc: "Foco em ROI e impacto no negócio, não em features." },
              { icon: HeartPulse, title: "Foco em dor do cliente", desc: "Toda conversa parte de um problema concreto e mensurável." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CRM Implementation */}
        <Section className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Database className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-semibold">
              Implementação de CRM
            </h2>
            <p className="mt-4 text-muted-foreground">
              Organizamos e estruturamos seu processo dentro de ferramentas como HubSpot, Pipedrive e RD Station — com automações, dashboards e integrações que dão visibilidade total da operação.
            </p>
          </div>
        </Section>

        {/* Conversion + Pricing */}
        <Section className="py-20">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="text-center">
              <TrendingUp className="mx-auto h-10 w-10 text-primary" />
              <h2 className="mt-4 font-display text-2xl font-semibold">
                Como melhorar sua taxa de conversão
              </h2>
              <p className="mt-4 text-muted-foreground">
                Com processos claros, qualificação rigorosa e acompanhamento de dados em cada etapa do funil — identificamos onde os leads caem e atacamos o gargalo certo.
              </p>
            </div>
            <div className="text-center">
              <DollarSign className="mx-auto h-10 w-10 text-primary" />
              <h2 className="mt-4 font-display text-2xl font-semibold">
                Quanto custa uma consultoria de vendas
              </h2>
              <p className="mt-4 text-muted-foreground">
                O investimento varia conforme o nível de maturidade da operação, tamanho do time e escopo do projeto. Fale com nosso especialista para um diagnóstico e proposta personalizada.
              </p>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="py-20">
          <SectionTitle eyebrow="FAQ">
            Perguntas frequentes
          </SectionTitle>
          <Accordion type="single" collapsible className="mt-8 max-w-3xl mx-auto">
            {[
              { q: "Uma consultoria de vendas realmente aumenta a conversão?", a: "Sim. Quando aplicada corretamente, ela melhora processos, abordagem e acompanhamento, impactando diretamente os resultados." },
              { q: "Preciso de CRM para melhorar minhas vendas?", a: "Não é obrigatório, mas o uso de CRM facilita organização, acompanhamento e previsibilidade da operação comercial." },
              { q: "Esse serviço funciona para equipes pequenas?", a: "Sim. Inclusive, equipes menores costumam se beneficiar ainda mais de processos bem estruturados desde o início." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        {/* Final CTA */}
        <Section id="contato" className="pb-32">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-primary/30 bg-card/40 p-10 md:p-16 backdrop-blur-xl shadow-[0_30px_80px_-20px_hsl(283_76%_54%/0.45)]">
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[var(--gradient-accent)] opacity-40 blur-3xl" />
            <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-[var(--gradient-accent)] opacity-30 blur-3xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
              }}
            />
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="size-4" />
                Vamos acelerar seu SaaS
              </div>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight heading-gradient-animated">
                Quer transformar suas vendas em uma máquina previsível?
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Vamos diagnosticar seu funil, desenhar a estratégia e executar com você o processo de vendas que o seu SaaS precisa.
              </p>
              <div className="mt-8 flex justify-center">
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                  style={{
                    background: "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
                    boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
                  }}
                >
                  Falar com Especialista
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-purple-light" />Resposta em até 24h</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-purple-light" />Diagnóstico gratuito</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-purple-light" />Especialistas em SaaS B2B</div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}

function SectionTitle({ children, eyebrow }: { children: React.ReactNode; eyebrow: string }) {
  return (
    <div className="text-center">
      <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
        {children}
      </h2>
    </div>
  );
}
