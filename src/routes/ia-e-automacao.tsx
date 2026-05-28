import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Bot, Zap, GitBranch, BarChart3, Workflow, MessageSquare,
  CheckCircle2, Sparkles, Brain, Cpu, Network, ArrowDown,
  Target, PenTool, Code2, TrendingUp, Rocket,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ScrollReveal } from "@/hooks/use-scroll-animation";
import { useContactDialog } from "@/components/ContactDialogProvider";

export const Route = createFileRoute("/ia-e-automacao")({
  head: () => ({
    meta: [
      { title: "IA e Automação para SaaS | Acelera SaaS" },
      { name: "description", content: "Automatize processos, qualifique leads e escale operações com inteligência artificial aplicada ao contexto B2B SaaS." },
      { property: "og:title", content: "IA e Automação para SaaS | Acelera SaaS" },
      { property: "og:description", content: "Soluções de IA e automação para empresas SaaS B2B. Escale sem aumentar o time." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IaAutomacaoPage,
});

const etapas = [
  { n: "01", icon: Target, t: "Diagnóstico", d: "Mapeamos seus processos e identificamos onde IA e automação geram mais impacto." },
  { n: "02", icon: PenTool, t: "Desenho dos fluxos", d: "Criamos os fluxos de automação e definimos os agentes de IA adequados para cada processo." },
  { n: "03", icon: Code2, t: "Implementação", d: "Integramos as ferramentas, configuramos os agentes e testamos cada automação." },
  { n: "04", icon: TrendingUp, t: "Evolução contínua", d: "Monitoramos os resultados e evoluímos os fluxos conforme o seu SaaS cresce." },
];

const beneficios = [
  { icon: Zap, t: "Escala sem aumentar o time", d: "Automações realizam tarefas repetitivas 24/7, liberando seu time para o que realmente importa." },
  { icon: Target, t: "Leads mais qualificados", d: "Agentes de IA identificam e priorizam as melhores oportunidades antes de chegarem ao comercial." },
  { icon: Rocket, t: "Ciclo de vendas mais curto", d: "Respostas imediatas e follow-ups automáticos mantêm o lead engajado e aceleram decisões." },
];

const faqs = [
  { q: "Preciso de equipe técnica para implementar?", a: "Não necessariamente. Cuidamos de toda a implementação e entregamos os fluxos prontos para uso." },
  { q: "Quais ferramentas vocês utilizam?", a: "Trabalhamos com as principais plataformas do mercado: Make, n8n, OpenAI, entre outras, sempre alinhadas ao seu stack." },
  { q: "É possível integrar com meu CRM atual?", a: "Sim. Integramos com HubSpot, Pipedrive, RD Station e outros CRMs utilizados por empresas SaaS." },
];

function IaAutomacaoPage() {
  const { open: openContactDialog } = useContactDialog();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
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
              IA e Automação para SaaS
            </span>

            <h1 className="heading-gradient font-sans text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Escale seu SaaS com IA e Automação
            </h1>

            <p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              Automatize processos, qualifique leads e escale operações com inteligência artificial aplicada ao contexto B2B SaaS.
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
              Como a IA transforma sua operação
            </div>
          </div>
        </section>

        {/* O que é */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Definição"
                title={
                  <>
                    O que é <span className="text-gradient">IA aplicada ao SaaS</span>
                  </>
                }
                description="É o uso estratégico de inteligência artificial e automações para tornar sua operação mais eficiente, escalável e previsível — sem necessariamente aumentar o headcount."
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                { icon: Brain, title: "Agentes de IA", desc: "Sistemas autônomos que executam tarefas complexas, tomam decisões e interagem com leads e clientes." },
                { icon: Workflow, title: "Automação de processos", desc: "Fluxos que eliminam tarefas manuais repetitivas em marketing, vendas e CS." },
                { icon: Network, title: "Integrações inteligentes", desc: "Conexão entre ferramentas do seu stack com lógica e gatilhos baseados em dados reais." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <ScrollReveal key={title} delay={i * 80} direction="scale">
                  <div className="card-glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Problemas */}
        <section className="relative bg-muted/20 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Diagnóstico"
                title={
                  <>
                    Sinais de que você precisa de <span className="text-gradient">automação</span>
                  </>
                }
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {[
                { icon: Cpu, title: "Tarefas manuais que escalam o time", desc: "Cada novo cliente exige mais horas de trabalho manual, tornando o crescimento caro e lento." },
                { icon: MessageSquare, title: "Follow-ups inconsistentes", desc: "Leads esfriam porque o time não consegue manter cadências de forma sistemática." },
                { icon: BarChart3, title: "Dados desconectados", desc: "Informações espalhadas em ferramentas diferentes, sem visibilidade integrada da operação." },
                { icon: GitBranch, title: "Processos que dependem de pessoas", desc: "Quando alguém sai, o processo vai junto. Falta documentação e automação que sustente o fluxo." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <ScrollReveal key={title} delay={i * 100}>
                  <div className="card-glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Soluções */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Soluções"
                title={
                  <>
                    O que <span className="text-gradient">implementamos</span> no seu SaaS
                  </>
                }
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                { icon: Bot, title: "Agentes de prospecção", desc: "IA que pesquisa, qualifica e inicia conversas com leads do seu ICP de forma autônoma." },
                { icon: Zap, title: "Automação de nutrição", desc: "Fluxos que entregam o conteúdo certo, no momento certo, para cada perfil de lead." },
                { icon: MessageSquare, title: "Atendimento inteligente", desc: "Chatbots e agentes que respondem dúvidas, qualificam intenção e alimentam o comercial." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <ScrollReveal key={title} delay={i * 80} direction="scale">
                  <div className="card-glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Como implementamos */}
        <section className="relative bg-muted/20 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Processo"
                title={
                  <>
                    Como <span className="text-gradient">implementamos</span> automação
                  </>
                }
                description="Um processo enxuto e mensurável, do diagnóstico à evolução contínua."
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {etapas.map((e, i) => (
                <ScrollReveal key={e.n} delay={i * 150}>
                  <div className="card-glass relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <span className="font-display text-5xl font-extrabold heading-gradient-animated">{e.n}</span>
                    <div className="mt-4 grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 hover:scale-110">
                      <e.icon className="size-5 text-primary-foreground" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{e.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Resultado"
                title={
                  <>
                    Benefícios da automação para <span className="text-gradient">empresas</span>
                  </>
                }
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {beneficios.map((b, i) => (
                <ScrollReveal key={b.t} delay={i * 100} direction="scale">
                  <div className="card-glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                      <b.icon className="size-5 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{b.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                  </div>
                </ScrollReveal>
              ))}
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

        {/* CTA Final */}
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
                  Pronto para colocar IA e automação para trabalhar pelo seu SaaS?
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                  Vamos mapear seus processos, desenhar os fluxos e implementar agentes e automações que escalam o seu time.
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
      </main>

      <Footer />
    </div>
  );
}
