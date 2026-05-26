import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Target, MousePointerClick, Layers, Search, PenTool, Code2,
  TrendingUp, CheckCircle2, XCircle, Sparkles, Zap, Gauge, LineChart,
  Compass, Frown, Map, Megaphone, Lightbulb, Rocket,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from "@/components/site/Footer";

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

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
      {children}
    </span>
  );
}

function WebDesignPage() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero">
          <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Web Design para SaaS</Eyebrow>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-6xl">
                Criação de Sites Profissionais para SaaS
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Desenvolva um site para o seu software que não só representa sua marca, mas converte visitantes em clientes.
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

        {/* O que é um site profissional */}
        <Section className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Definição</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              O que é um site profissional
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Vai muito além de uma vitrine bonita. É um ativo de negócio projetado para atrair, engajar e converter — alinhando branding, experiência e estratégia comercial em uma única máquina de aquisição.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Compass, title: "Estratégia", desc: "Posicionamento claro, copy persuasiva e funil orientado à decisão de compra do seu ICP." },
              { icon: Sparkles, title: "Experiência", desc: "Design system consistente, microinterações sutis e jornada que reduz fricção em cada clique." },
              { icon: Gauge, title: "Performance", desc: "Carregamento rápido, SEO técnico e Core Web Vitals que sustentam tráfego orgânico previsível." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
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
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
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
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Zap, k: "3x", v: "mais conversão com UX estratégico" },
              { icon: LineChart, k: "+62%", v: "de tráfego orgânico em 6 meses" },
              { icon: TrendingUp, k: "<2s", v: "de carregamento médio (LCP)" },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="rounded-2xl border border-border/60 bg-card/50 p-6 text-center">
                <Icon className="mx-auto h-8 w-8 text-primary" />
                <div className="mt-3 font-display text-3xl font-extrabold text-foreground">{k}</div>
                <p className="mt-1 text-sm text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Por que seu site não gera resultados */}
        <Section className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Diagnóstico</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              Por que seu site não gera resultados
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Identificamos rapidamente os bloqueios mais comuns que impedem seu SaaS de transformar tráfego em pipeline.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Falta de foco em conversão", desc: "Design bonito, mas sem CTAs, hierarquia ou prova social bem posicionados." },
              { icon: Frown, title: "Experiência do usuário ruim", desc: "Navegação confusa, lentidão e jornadas que afastam o visitante." },
              { icon: Map, title: "Ausência de estratégia", desc: "Site construído por intuição, sem funil, copy persuasiva ou SEO." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Como criamos sites focados em conversão */}
        <Section className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Nossa Abordagem</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              Como criamos sites focados em conversão
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MousePointerClick, title: "UX e UI estratégicos", desc: "Decisões visuais guiadas por dados e jornada do usuário." },
              { icon: Layers, title: "Estrutura orientada a funil", desc: "Cada seção empurra o visitante para o próximo passo." },
              { icon: PenTool, title: "Copy persuasiva", desc: "Mensagens claras que ativam dor, valor e ação." },
              { icon: Search, title: "SEO técnico", desc: "Performance, semântica e indexação preparadas para escalar." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* UX e UI aplicados ao seu negócio */}
        <Section className="py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Eyebrow>UX & UI</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
                UX e UI aplicados ao seu negócio
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Projetamos experiências que facilitam a navegação e aumentam a conversão. Cada interação é desenhada para reduzir fricção, comunicar valor e levar o visitante até o objetivo de negócio.
              </p>
              <ul className="mt-6 space-y-3">
                {["Hierarquia visual clara e consistente", "Componentes reutilizáveis e responsivos", "Microinterações que reforçam confiança", "Acessibilidade e performance como padrão"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/50 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-lg bg-muted/40 p-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">01</div>
                  <div>
                    <div className="text-sm font-semibold">Hero</div>
                    <div className="text-xs text-muted-foreground">Proposta de valor em 5 segundos</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-muted/40 p-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">02</div>
                  <div>
                    <div className="text-sm font-semibold">Prova Social</div>
                    <div className="text-xs text-muted-foreground">Logos, depoimentos, números</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-muted/40 p-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">03</div>
                  <div>
                    <div className="text-sm font-semibold">Recursos</div>
                    <div className="text-xs text-muted-foreground">Benefícios e solução</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-muted/40 p-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">04</div>
                  <div>
                    <div className="text-sm font-semibold">CTA Final</div>
                    <div className="text-xs text-muted-foreground">Captura de lead</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Etapas do desenvolvimento */}
        <Section className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Processo</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              Etapas do desenvolvimento do site
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", icon: Target, title: "Planejamento", desc: "Pesquisa, posicionamento, mapa de conteúdo e arquitetura de informação." },
              { n: "02", icon: PenTool, title: "Design", desc: "UI baseado em design system, protótipos navegáveis e copy estratégica." },
              { n: "03", icon: Code2, title: "Desenvolvimento", desc: "Código performático, responsivo e com SEO técnico de ponta." },
              { n: "04", icon: TrendingUp, title: "Otimização", desc: "Testes A/B, análise de dados e melhorias contínuas de conversão." },
            ].map(({ n, icon: Icon, title, desc }) => (
              <div key={n} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-display text-sm font-bold">
                  {n}
                </div>
                <Icon className="mt-4 h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Exemplos de sites que convertem */}
        <Section className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Boas práticas</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              Exemplos de sites que convertem
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Sites que geram leads consistentes têm em comum três pilares fundamentais.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Lightbulb, title: "Proposta clara", desc: "Em 5 segundos o visitante entende o que você faz e para quem." },
              { icon: Megaphone, title: "CTAs estratégicos", desc: "Chamadas posicionadas em pontos-chave da jornada de decisão." },
              { icon: Compass, title: "Navegação intuitiva", desc: "Estrutura simples, busca e atalhos que aceleram a conversão." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Quanto custa */}
        <Section className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Investimento</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              Quanto custa criar um site
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              O investimento depende do escopo do projeto, mas nosso foco é sempre o mesmo: retorno sobre investimento. Construímos sites que se pagam ao gerar pipeline qualificado.
            </p>
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
          </div>
        </Section>

        {/* FAQ */}
        <Section className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight heading-gradient-animated md:text-4xl">
              Perguntas frequentes
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-8 max-w-3xl mx-auto">
            {[
              { q: "Um site novo realmente melhora as vendas?", a: "Sim, principalmente quando é estruturado com foco em conversão, experiência do usuário e clareza na proposta de valor." },
              { q: "Preciso refazer meu site ou dá para otimizar o atual?", a: "Depende da estrutura atual. Em alguns casos, ajustes são suficientes; em outros, é melhor desenvolver um novo site." },
              { q: "Quanto tempo leva para desenvolver um site?", a: "O prazo varia conforme a complexidade, mas geralmente leva de algumas semanas a poucos meses." },
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
                Quer um site que gere resultados reais?
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Vamos desenhar a máquina de aquisição do seu SaaS — do design à conversão — com método validado em mais de 400 projetos.
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
