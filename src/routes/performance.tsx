import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Target, BarChart3, Sparkles, TrendingUp, Search, Settings,
  LineChart, Rocket, Compass, Users, FileWarning, Activity, Crosshair,
  Repeat, FlaskConical, MousePointerClick,
} from "lucide-react";
import { Footer } from "@/components/site/Footer";
import {
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

function PerformancePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-accent)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-accent)" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur">
            <Sparkles className="size-4" />
            Performance · Tráfego Pago
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Agência de Tráfego Pago para SaaS
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Escalone a aquisição de clientes do seu software com campanhas orientadas a dados e focadas em ROI.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
              style={{
                background: "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
                boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
              }}
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Definição
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              O que é tráfego pago
            </h2>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            Tráfego pago é a estratégia de aquisição de clientes por meio de anúncios em plataformas como Google Ads e Meta Ads. Para empresas de tecnologia, é uma forma rápida de gerar demanda e validar canais de aquisição.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Diagnóstico
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Por que seus anúncios não performam
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { text: "Não possuem estratégia clara", icon: Compass },
              { text: "Não segmentam corretamente o público", icon: Users },
              { text: "Não têm páginas otimizadas", icon: FileWarning },
              { text: "Não analisam dados de forma contínua", icon: Activity },
            ].map(({ text, icon: Icon }) => (
              <div
                key={text}
                className="rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/30 hover:bg-card"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Metodologia
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Como funciona a gestão de tráfego pago
            </h2>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            Na Acelera SaaS, tratamos mídia paga como um canal estratégico de crescimento. Atuamos em:
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Search, title: "Planejamento de campanhas", desc: "Diagnóstico, objetivos e plano de mídia conectado ao funil." },
              { icon: Target, title: "Público e segmentação", desc: "ICP, listas, lookalikes e segmentação por intenção." },
              { icon: Sparkles, title: "Criação de anúncios", desc: "Criativos e copies que falam a linguagem do seu SaaS." },
              { icon: Settings, title: "Otimização contínua", desc: "Ajustes semanais com base em sinais de conversão." },
              { icon: BarChart3, title: "Análise de performance", desc: "Dashboards com CAC, ROI e custo por lead em tempo real." },
              { icon: TrendingUp, title: "Escala previsível", desc: "Aumento de investimento sem perder eficiência." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/30 hover:bg-card"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Canais
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Estratégias de Google Ads e Meta Ads
            </h2>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            Combinamos canais de busca e descoberta para capturar demanda existente e gerar nova demanda qualificada.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { text: "Campanhas de fundo de funil", icon: Crosshair },
              { text: "Remarketing", icon: Repeat },
              { text: "Testes A/B constantes", icon: FlaskConical },
              { text: "Otimização por conversão", icon: MousePointerClick },
            ].map(({ text, icon: Icon }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-2xl border border-border/40 bg-card/60 p-5 backdrop-blur"
              >
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Processo
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Nosso processo de otimização de campanhas
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Planejamento estratégico", icon: Search },
              { step: "02", title: "Estruturação de campanhas", icon: Settings },
              { step: "03", title: "Execução", icon: Rocket },
              { step: "04", title: "Otimização baseada em dados", icon: LineChart },
            ].map(({ step, title, icon: Icon }) => (
              <div
                key={step}
                className="relative rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur"
              >
                <span className="font-display text-3xl font-extrabold text-primary/20">{step}</span>
                <div className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Indicadores
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              ROI e métricas de performance
            </h2>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            Acompanhamos os indicadores que de fato movem o crescimento do seu SaaS:
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "CAC", d: "Custo de Aquisição de Cliente", icon: Target },
              { k: "ROI", d: "Retorno sobre Investimento", icon: TrendingUp },
              { k: "CVR", d: "Taxa de conversão", icon: BarChart3 },
              { k: "CPL", d: "Custo por lead", icon: LineChart },
            ].map(({ k, d, icon: Icon }) => (
              <div
                key={k}
                className="rounded-2xl border border-border/40 bg-card/60 p-6 text-center backdrop-blur"
              >
                <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-display text-2xl font-extrabold text-foreground">{k}</span>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              Investimento
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Quanto custa investir em tráfego pago
            </h2>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            O investimento varia conforme o mercado e os objetivos do seu SaaS, mas o foco é sempre o mesmo: maximizar o retorno sobre o investimento e construir um canal de aquisição previsível.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
              FAQ
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Perguntas frequentes
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible>
              {[
                { q: "Tráfego pago funciona para qualquer SaaS?", a: "Funciona melhor para SaaS que já possuem uma oferta validada e páginas otimizadas para conversão." },
                { q: "Qual o investimento mínimo em anúncios?", a: "O valor depende do mercado e concorrência, mas o ideal é começar com um orçamento que permita testes e otimizações." },
                { q: "Em quanto tempo vejo retorno com tráfego pago?", a: "Os resultados podem começar rapidamente, mas a otimização contínua é essencial para melhorar o ROI ao longo do tempo." },
              ].map(({ q, a }, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contato" className="pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-primary/30 bg-card/40 p-10 md:p-16 backdrop-blur-xl shadow-[0_30px_80px_-20px_hsl(283_76%_54%/0.45)]">
            <div
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-accent)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-accent)" }}
            />

            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              }}
            />

            <div className="relative z-10 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur">
                <Sparkles className="size-4" />
                Vamos acelerar seu SaaS
              </span>

              <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl heading-gradient-animated">
                Quer escalar sua aquisição de clientes com previsibilidade?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Fale com um especialista da Acelera SaaS e descubra como transformar mídia paga no motor de crescimento do seu software.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                  style={{
                    background: "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
                    boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
                  }}
                >
                  Falar com Especialista
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Resposta em até 24h
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Diagnóstico gratuito
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Especialistas em SaaS B2B
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
