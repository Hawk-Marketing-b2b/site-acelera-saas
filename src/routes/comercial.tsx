import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Target, Shuffle, GaugeCircle, Unplug, Workflow, LineChart,
  Users, Rocket, CheckCircle2, Sparkles,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from "@/components/site/Footer";

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

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
          {eyebrow}
        </span>
      )}
      <h2 className={eyebrow ? "mt-5" : "" + " font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl"}>
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

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
    <div>
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero">
          <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Serviço · Comercial
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-6xl">
                Estruturação Comercial para SaaS
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Organize a área comercial da sua empresa de tecnologia e crie um processo escalável de vendas.
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
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
                O que é
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
                O que é estrutura comercial
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                É a base que sustenta o crescimento das vendas. Reúne processos, pessoas, métricas e ferramentas que transformam o esforço individual em uma máquina previsível de aquisição de clientes para o seu SaaS.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { k: "Processo", v: "Padronizado" },
                  { k: "Pipeline", v: "Visível" },
                  { k: "Métricas", v: "Acionáveis" },
                  { k: "Equipe", v: "Alinhada" },
                ].map((item) => (
                  <div key={item.k} className="rounded-xl border border-border/60 bg-card/50 p-4 text-center">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.k}</div>
                    <div className="mt-1 font-display text-lg font-semibold">{item.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Erros comuns */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Problemas" title="Erros comuns na área comercial" description="Antes de escalar, é preciso resolver os problemas que travam a sua operação." />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {errors.map((e) => (
                <div key={e.title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                  <e.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como organizar */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Método" title="Como organizar o processo de vendas do seu SaaS" description="Um método claro para sair do caos operacional e construir uma operação repetível." />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-display text-sm font-bold">
                    0{i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pipeline e métricas */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="rounded-2xl border border-border/60 bg-card/50 p-6">
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
              <div>
                <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
                  Indicadores
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
                  Pipeline e métricas comerciais
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Acompanhamos os indicadores certos em cada etapa do funil para identificar gargalos, prever receita e otimizar continuamente os resultados do seu time de vendas.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Taxa de conversão por etapa do funil", "Ciclo médio de vendas e ticket médio", "CAC, LTV e payback do investimento comercial"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Equipe e escala */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="text-center md:text-left">
                <Users className="mx-auto md:mx-0 h-10 w-10 text-primary" />
                <h2 className="mt-4 font-display text-2xl font-semibold">
                  Como montar uma equipe comercial
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Estruturamos papéis e responsabilidades — SDR, Closer, Customer Success — alinhados ao estágio e ao modelo de receita do seu SaaS.
                </p>
              </div>
              <div className="text-center md:text-left">
                <Rocket className="mx-auto md:mx-0 h-10 w-10 text-primary" />
                <h2 className="mt-4 font-display text-2xl font-semibold">
                  Estratégias para escalar vendas
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Com processos claros, previsibilidade e gestão por dados, o seu SaaS cresce de forma sustentável e com unit economics saudável.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="FAQ" title="Perguntas frequentes — Comercial" />
            <Accordion type="single" collapsible className="mt-8 max-w-3xl mx-auto">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
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
                  Quer estruturar sua área comercial?
                </h2>
                <p className="mt-5 text-lg text-muted-foreground">
                  Vamos conversar sobre o momento do seu SaaS e desenhar o próximo passo da sua operação de vendas — com método validado em mais de 400 projetos.
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
