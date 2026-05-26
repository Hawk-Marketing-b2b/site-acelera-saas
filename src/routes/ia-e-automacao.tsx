import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Bot, Zap, GitBranch, BarChart3, Workflow, MessageSquare,
  Check, Sparkles, Brain, Cpu, Network,
} from "lucide-react";
import { Footer } from "@/components/site/Footer";

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
  { n: "01", t: "Diagnóstico", d: "Mapeamos seus processos e identificamos onde IA e automação geram mais impacto." },
  { n: "02", t: "Desenho dos fluxos", d: "Criamos os fluxos de automação e definimos os agentes de IA adequados para cada processo." },
  { n: "03", t: "Implementação", d: "Integramos as ferramentas, configuramos os agentes e testamos cada automação." },
  { n: "04", t: "Evolução contínua", d: "Monitoramos os resultados e evoluímos os fluxos conforme o seu SaaS cresce." },
];

const beneficios = [
  { t: "Escala sem aumentar o time", d: "Automações realizam tarefas repetitivas 24/7, liberando seu time para o que realmente importa." },
  { t: "Leads mais qualificados", d: "Agentes de IA identificam e priorizam as melhores oportunidades antes de chegarem ao comercial." },
  { t: "Ciclo de vendas mais curto", d: "Respostas imediatas e follow-ups automáticos mantêm o lead engajado e aceleram decisões." },
];

const faqs = [
  { q: "Preciso de equipe técnica para implementar?", a: "Não necessariamente. Cuidamos de toda a implementação e entregamos os fluxos prontos para uso." },
  { q: "Quais ferramentas vocês utilizam?", a: "Trabalhamos com as principais plataformas do mercado: Make, n8n, OpenAI, entre outras, sempre alinhadas ao seu stack." },
  { q: "É possível integrar com meu CRM atual?", a: "Sim. Integramos com HubSpot, Pipedrive, RD Station e outros CRMs utilizados por empresas SaaS." },
];

function useReveal() {
  return (el: HTMLElement | null) => {
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
  };
}

function RevealSection({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useReveal();
  return (
    <section id={id} className={className}>
      <div ref={ref} className="reveal-section opacity-0 translate-y-6 transition-all duration-700 [&.in-view]:opacity-100 [&.in-view]:translate-y-0">
        <div className="mx-auto max-w-7xl px-6">
          {children}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground">{q}</span>
        <span className="text-xl font-light text-muted-foreground transition-transform duration-200">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

function IaAutomacaoPage() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero">
          <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                IA e Automação para SaaS
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-6xl">
                Escale seu SaaS com IA e Automação
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Automatize processos, qualifique leads e escale operações com inteligência artificial aplicada ao contexto B2B SaaS.
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

        {/* O que é */}
        <RevealSection className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Definição
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              O que é IA aplicada ao SaaS
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              É o uso estratégico de inteligência artificial e automações para tornar sua operação mais eficiente, escalável e previsível — sem necessariamente aumentar o headcount.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Brain, title: "Agentes de IA", desc: "Sistemas autônomos que executam tarefas complexas, tomam decisões e interagem com leads e clientes." },
              { icon: Workflow, title: "Automação de processos", desc: "Fluxos que eliminam tarefas manuais repetitivas em marketing, vendas e CS." },
              { icon: Network, title: "Integrações inteligentes", desc: "Conexão entre ferramentas do seu stack com lógica e gatilhos baseados em dados reais." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Problemas */}
        <RevealSection className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Diagnóstico
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              Sinais de que você precisa de automação
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { icon: Cpu, title: "Tarefas manuais que escalam o time", desc: "Cada novo cliente exige mais horas de trabalho manual, tornando o crescimento caro e lento." },
              { icon: MessageSquare, title: "Follow-ups inconsistentes", desc: "Leads esfriam porque o time não consegue manter cadências de forma sistemática." },
              { icon: BarChart3, title: "Dados desconectados", desc: "Informações espalhadas em ferramentas diferentes, sem visibilidade integrada da operação." },
              { icon: GitBranch, title: "Processos que dependem de pessoas", desc: "Quando alguém sai, o processo vai junto. Falta documentação e automação que sustente o fluxo." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Soluções */}
        <RevealSection className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Soluções
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              O que implementamos no seu SaaS
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Bot, title: "Agentes de prospecção", desc: "IA que pesquisa, qualifica e inicia conversas com leads do seu ICP de forma autônoma." },
              { icon: Zap, title: "Automação de nutrição", desc: "Fluxos que entregam o conteúdo certo, no momento certo, para cada perfil de lead." },
              { icon: MessageSquare, title: "Atendimento inteligente", desc: "Chatbots e agentes que respondem dúvidas, qualificam intenção e alimentam o comercial." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Como implementamos */}
        <RevealSection className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Processo
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              Como implementamos automação
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Um processo enxuto e mensurável, do diagnóstico à evolução contínua.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {etapas.map((e) => (
              <div key={e.n} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-display text-sm font-bold">
                  {e.n}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Benefícios */}
        <RevealSection className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Resultado
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              Benefícios da automação para empresas
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {beneficios.map((b) => (
              <div key={b.t} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <Check className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* FAQ */}
        <RevealSection className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              FAQ
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              Perguntas frequentes
            </h2>
          </div>
          <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-border/60 bg-card/50 overflow-hidden">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </RevealSection>

        {/* CTA Final */}
        <section id="contato" className="pb-32">
          <div className="mx-auto max-w-7xl px-6">
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
                  Pronto para colocar IA e automação para trabalhar pelo seu SaaS?
                </h2>
                <p className="mt-5 text-lg text-muted-foreground">
                  Vamos mapear seus processos, desenhar os fluxos e implementar agentes e automações que escalam o seu time.
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
                  {["Resposta em até 24h", "Diagnóstico gratuito", "Especialistas em SaaS B2B"].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <Check className="size-3.5 text-purple-light" />
                      {t}
                    </div>
                  ))}
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
