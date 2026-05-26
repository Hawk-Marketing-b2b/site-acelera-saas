import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Target, MousePointerClick, Layers, Search, PenTool, Code2,
  TrendingUp, CheckCircle2, XCircle, Sparkles, Zap, Gauge, LineChart,
  Compass, Frown, Map, Megaphone, Lightbulb, ArrowDown,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

export const Route = createFileRoute("/web-design")({
  head: () => ({
    meta: [
      { title: "Criação de Sites Profissionais para SaaS | Acelera SaaS" },
      { name: "description", content: "Criação de sites profissionais para SaaS focados em conversão. UX/UI estratégico, copy persuasiva, SEO técnico e estrutura orientada a funil. Fale com um especialista." },
      { name: "keywords", content: "criação de sites para SaaS, site profissional SaaS, web design SaaS, site que converte, UX UI SaaS" },
      { property: "og:title", content: "Criação de Sites Profissionais para SaaS | Acelera SaaS" },
      { property: "og:description", content: "Sites profissionais para SaaS estruturados para gerar resultados: UX/UI, copy persuasiva, SEO técnico e foco em conversão." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WebDesignPage,
});

const faqs = [
  { q: "Um site novo realmente melhora as vendas?", a: "Sim, principalmente quando é estruturado com foco em conversão, experiência do usuário e clareza na proposta de valor." },
  { q: "Preciso refazer meu site ou dá para otimizar o atual?", a: "Depende da estrutura atual. Em alguns casos, ajustes são suficientes; em outros, é melhor desenvolver um novo site." },
  { q: "Quanto tempo leva para desenvolver um site?", a: "O prazo varia conforme a complexidade, mas geralmente leva de algumas semanas a poucos meses." },
];

function WebDesignPage() {
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
              Web Design para SaaS
            </span>

            <h1 className="heading-gradient font-sans text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Criação de Sites Profissionais para SaaS
            </h1>

            <p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              Desenvolva um site para o seu software que não só representa sua marca, mas converte visitantes em clientes.
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
              Como criamos sites que convertem
            </div>
          </div>
        </section>

        {/* O que é um site profissional */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Definição"
                title={
                  <>
                    O que é um <span className="text-gradient">site profissional</span>
                  </>
                }
                description="Vai muito além de uma vitrine bonita. É um ativo de negócio projetado para atrair, engajar e converter — alinhando branding, experiência e estratégia comercial em uma única máquina de aquisição."
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                { icon: Compass, title: "Estratégia", desc: "Posicionamento claro, copy persuasiva e funil orientado à decisão de compra do seu ICP." },
                { icon: Sparkles, title: "Experiência", desc: "Design system consistente, microinterações sutis e jornada que reduz fricção em cada clique." },
                { icon: Gauge, title: "Performance", desc: "Carregamento rápido, SEO técnico e Core Web Vitals que sustentam tráfego orgânico previsível." },
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

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <ScrollReveal direction="left">
                <div className="card-glass rounded-2xl border border-destructive/30 bg-destructive/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center gap-2 text-destructive font-semibold">
                    <XCircle className="h-5 w-5" />
                    Site amador
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {["Design genérico, sem identidade", "Sem clareza de proposta de valor", "CTAs aleatórios e sem hierarquia", "Carregamento lento e SEO frágil"].map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 shrink-0 mt-0.5 text-destructive/70" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={150}>
                <div className="card-glass rounded-2xl border border-primary/30 bg-primary/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <CheckCircle2 className="h-5 w-5" />
                    Site profissional
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {["Identidade visual forte e coerente", "Mensagem clara em até 5 segundos", "Funil estruturado com CTAs estratégicos", "Performance, SEO e conversão como padrão"].map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary/70" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                { icon: Zap, k: "3x", v: "mais conversão com UX estratégico" },
                { icon: LineChart, k: "+62%", v: "de tráfego orgânico em 6 meses" },
                { icon: TrendingUp, k: "<2s", v: "de carregamento médio (LCP)" },
              ].map(({ icon: Icon, k, v }, i) => (
                <ScrollReveal key={k} delay={i * 100} direction="scale">
                  <div className="card-glass rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-button shadow-button transition-transform duration-300 hover:scale-110">
                      <Icon className="size-6 text-primary-foreground" />
                    </div>
                    <div className="mt-5 font-display text-3xl font-extrabold text-foreground">{k}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{v}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Por que seu site não gera resultados */}
        <section className="relative bg-muted/20 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Diagnóstico"
                title={
                  <>
                    Por que seu site <span className="text-gradient">não gera resultados</span>
                  </>
                }
                description="Identificamos rapidamente os bloqueios mais comuns que impedem seu SaaS de transformar tráfego em pipeline."
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                { icon: Target, title: "Falta de foco em conversão", desc: "Design bonito, mas sem CTAs, hierarquia ou prova social bem posicionados." },
                { icon: Frown, title: "Experiência do usuário ruim", desc: "Navegação confusa, lentidão e jornadas que afastam o visitante." },
                { icon: Map, title: "Ausência de estratégia", desc: "Site construído por intuição, sem funil, copy persuasiva ou SEO." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="card-glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="size-5 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Como criamos sites focados em conversão */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Nossa Abordagem"
                title={
                  <>
                    Como criamos sites <span className="text-gradient">focados em conversão</span>
                  </>
                }
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: MousePointerClick, title: "UX e UI estratégicos", desc: "Decisões visuais guiadas por dados e jornada do usuário." },
                { icon: Layers, title: "Estrutura orientada a funil", desc: "Cada seção empurra o visitante para o próximo passo." },
                { icon: PenTool, title: "Copy persuasiva", desc: "Mensagens claras que ativam dor, valor e ação." },
                { icon: Search, title: "SEO técnico", desc: "Performance, semântica e indexação preparadas para escalar." },
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

        {/* UX e UI aplicados ao seu negócio */}
        <section className="relative bg-muted/20 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <ScrollReveal direction="left">
                <SectionHeading
                  eyebrow="UX & UI"
                  align="left"
                  title={
                    <>
                      UX e UI <span className="text-gradient">aplicados ao seu negócio</span>
                    </>
                  }
                  description="Projetamos experiências que facilitam a navegação e aumentam a conversão. Cada interação é desenhada para reduzir fricção, comunicar valor e levar o visitante até o objetivo de negócio."
                />
                <ul className="mt-6 space-y-3">
                  {["Hierarquia visual clara e consistente", "Componentes reutilizáveis e responsivos", "Microinterações que reforçam confiança", "Acessibilidade e performance como padrão"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={150}>
                <div className="card-glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="space-y-4">
                    {[
                      { n: "01", label: "Hero", desc: "Proposta de valor em 5 segundos" },
                      { n: "02", label: "Prova Social", desc: "Logos, depoimentos, números" },
                      { n: "03", label: "Recursos", desc: "Benefícios e solução" },
                      { n: "04", label: "CTA Final", desc: "Captura de lead" },
                    ].map((row) => (
                      <div key={row.n} className="flex items-center gap-3 rounded-lg bg-muted/40 p-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">{row.n}</div>
                        <div>
                          <div className="text-sm font-semibold">{row.label}</div>
                          <div className="text-xs text-muted-foreground">{row.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Etapas do desenvolvimento */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Processo"
                title={
                  <>
                    Etapas do <span className="text-gradient">desenvolvimento</span> do site
                  </>
                }
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", icon: Target, title: "Planejamento", desc: "Pesquisa, posicionamento, mapa de conteúdo e arquitetura de informação." },
                { n: "02", icon: PenTool, title: "Design", desc: "UI baseado em design system, protótipos navegáveis e copy estratégica." },
                { n: "03", icon: Code2, title: "Desenvolvimento", desc: "Código performático, responsivo e com SEO técnico de ponta." },
                { n: "04", icon: TrendingUp, title: "Otimização", desc: "Testes A/B, análise de dados e melhorias contínuas de conversão." },
              ].map(({ n, icon: Icon, title, desc }, i) => (
                <ScrollReveal key={n} delay={i * 150}>
                  <div className="card-glass relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <span className="font-display text-5xl font-extrabold heading-gradient-animated">{n}</span>
                    <div className="mt-4 grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 hover:scale-110">
                      <Icon className="size-5 text-primary-foreground" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Exemplos de sites que convertem */}
        <section className="relative bg-muted/20 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Boas práticas"
                title={
                  <>
                    Exemplos de sites que <span className="text-gradient">convertem</span>
                  </>
                }
                description="Sites que geram leads consistentes têm em comum três pilares fundamentais."
              />
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                { icon: Lightbulb, title: "Proposta clara", desc: "Em 5 segundos o visitante entende o que você faz e para quem." },
                { icon: Megaphone, title: "CTAs estratégicos", desc: "Chamadas posicionadas em pontos-chave da jornada de decisão." },
                { icon: Compass, title: "Navegação intuitiva", desc: "Estrutura simples, busca e atalhos que aceleram a conversão." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100} direction="scale">
                  <div className="card-glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="size-5 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quanto custa */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Investimento"
                title={
                  <>
                    Quanto custa <span className="text-gradient">criar um site</span>
                  </>
                }
                description="O investimento depende do escopo do projeto, mas nosso foco é sempre o mesmo: retorno sobre investimento. Construímos sites que se pagam ao gerar pipeline qualificado."
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-10 flex justify-center">
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                  style={{
                    background: "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
                    boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
                  }}
                >
                  Solicitar proposta
                  <ArrowRight className="w-5 h-5" />
                </button>
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
                  Quer um site que gere resultados reais?
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                  Vamos desenhar a máquina de aquisição do seu SaaS — do design à conversão — com método validado em mais de 400 projetos.
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
      </main>

      <Footer />
    </div>
  );
}
