import { createFileRoute } from "@tanstack/react-router";
import { Code2, Compass, Megaphone, Target } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import HeroSection from "@/components/HeroSection";
import AllClientsSection from "@/components/AllClientsSection";
import StatsSection from "@/components/StatsSection";
import MethodSection from "@/components/MethodSection";
import TrainingSection from "@/components/TrainingSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agência de Marketing para SaaS | Acelera SaaS" },
      { name: "description", content: "Agência de marketing para SaaS B2B. Geramos demanda qualificada com metodologia validada em mais de 400 projetos." },
      { property: "og:title", content: "Agência de Marketing para SaaS | Acelera SaaS" },
      { property: "og:description", content: "Agência de marketing para SaaS B2B. Geramos demanda qualificada com metodologia validada em mais de 400 projetos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

type Item = { text: string; letter?: string };

const cards = [
  {
    icon: Code2,
    number: "01",
    title: "Desenvolvemos",
    program: "NoraLabs",
    phrase: "Do zero ao produto pronto pra vender",
    items: [
      { text: "Ideação e validação do problema" },
      { text: "Modelagem de negócio e precificação" },
      { text: "Desenvolvimento de MVP com time de tech próprio" },
      { text: "Resgate de SaaS travado: finalizamos o que ficou pela metade" },
      { text: "Infraestrutura, segurança e escalabilidade" },
    ] as Item[],
  },
  {
    icon: Compass,
    number: "02",
    title: "Acompanhamos",
    program: "Programa RACE",
    phrase: "O método antes do tráfego",
    items: [
      { letter: "R", text: "Rota Definida: ICP, posicionamento e metas" },
      { letter: "A", text: "Aquisição e Oferta: oferta, canais e campanhas" },
      { letter: "C", text: "Comercial Estruturado: CRM, playbook e pipeline" },
      { letter: "E", text: "Escala Acelerada: acelerar só o que já foi validado" },
      { text: "Mentorias com os sócios + acesso à MRR Academy" },
    ] as Item[],
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Aceleramos: Marketing",
    program: "GTM Operacional",
    phrase: "Mão na massa para gerar demanda",
    items: [
      { text: "Campanhas de tráfego pago (Google e Meta)" },
      { text: "Landing pages e site que explica o que resolve" },
      { text: "Criativos que vendem oferta, não função" },
      { text: "Redes sociais e conteúdo de autoridade" },
      { text: "Automação de marketing e nutrição de leads" },
    ] as Item[],
  },
  {
    icon: Target,
    number: "04",
    title: "Aceleramos: Vendas",
    program: "GTM Operacional",
    phrase: "Processo que transforma lead em MRR",
    items: [
      { text: "Implantação e auditoria de CRM" },
      { text: "Critérios de qualificação: MQL, SQL e SAL" },
      { text: "Script de vendas e playbook comercial" },
      { text: "Cadência de abordagem e follow-up" },
      { text: "Dashboard de CAC, conversão, churn e LTV/CAC" },
      { text: "Acompanhamento de rotina e metas do time" },
    ] as Item[],
  },
] as const;

function EcosystemGrid() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-5 pl-11 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:pl-0 xl:pt-36">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.number}
              className="card-glass relative flex h-full min-w-0 flex-col gap-4 rounded-[20px] p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-button shadow-button">
                  <Icon className="size-5 text-primary-foreground" />
                </div>
                <span
                  aria-hidden="true"
                  className="font-display text-4xl font-extrabold leading-none text-foreground/10"
                >
                  {card.number}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-accent">
                  {card.program}
                </p>
              </div>
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                {card.phrase}
              </p>
              <ul className="mt-auto space-y-2.5 text-sm text-muted-foreground">
                {card.items.map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5">
                    {item.letter ? (
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-gradient-button text-[10px] font-bold text-primary-foreground">
                        {item.letter}
                      </span>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-purple-light/60"
                      />
                    )}
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      <section id="servicos" className="relative overflow-hidden px-6 py-24">
        <div aria-hidden="true" className="eco-glow-top" />
        <div aria-hidden="true" className="eco-floor" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="eyebrow text-[13px] text-accent">
              Do código à receita recorrente
            </p>
            <h2 className="h2-section mt-5">
              <span className="block text-foreground">
                Tudo o que vem antes do tráfego.
              </span>
              <span className="block text-gradient">E o tráfego também.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Um ecossistema completo para levar seu SaaS da ideia à receita recorrente.
            </p>
          </div>
          <EcosystemGrid />

          <div className="mt-16 text-center">
            <p className="text-base text-muted-foreground">
              Você entra no estágio em que está: ideia, primeiros clientes, tração ou escala.
            </p>
            <a
              href="#contato"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-button px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-button transition-transform duration-200 hover:scale-105"
            >
              Quero meu diagnóstico
            </a>
            <p className="mt-6 text-[13px] text-muted-foreground/70">
              Grupo HardWork Company: AceleraSaaS · Hawk Marketing · NoraLabs · AtendeBot
            </p>
          </div>
        </div>
      </section>

      <AllClientsSection />
      <StatsSection />
      <MethodSection />
      <TrainingSection />
      <ComparisonSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
