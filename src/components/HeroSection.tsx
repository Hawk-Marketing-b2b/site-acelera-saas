import ContactForm from "./ContactForm";
import f1Car from "@/assets/f1-car-acelera.png";

const HeroSection = () => {
  return (
    <section className="relative bg-background pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="absolute -right-20 bottom-0 w-[600px] h-[300px] opacity-[0.07] pointer-events-none hidden lg:block">
        <img src={f1Car} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] md:gap-8 lg:gap-16 lg:px-8">
        <div className="min-w-0 space-y-6 lg:space-y-8">
          <div className="inline-flex max-w-full items-center border-l-2 border-primary pl-3">
            <span className="text-sm font-medium leading-relaxed text-foreground">
              O maior ecossistema de vendas para SaaS
            </span>
          </div>

            <h1 className="home-hero-title font-display text-foreground">
              Dono de SaaS, você{" "}
              <span className="text-gradient-pink">NÃO</span>{" "}
              <span className="text-accent">precisa</span> de uma Agência de
              Marketing.
            </h1>

          <p className="max-w-xl text-base font-medium leading-relaxed text-muted-foreground lg:text-lg">
            Somos um Ecossistema de Soluções para SaaS, desde o Desenvolvimento de Ideias e MVP para Saas que estão começando, até a Escala de SaaS que faturam mais de R$100 mil por mês.
          </p>
        </div>

        <div id="hero-contato" className="min-w-0 scroll-mt-28 border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8 lg:pl-10">
          <div className="mb-6 space-y-2">
            <h2 className="font-display text-2xl font-bold leading-snug text-foreground">
              Fale com um Especialista
            </h2>
            <p className="text-sm text-muted-foreground">
              Receba um diagnóstico estratégico gratuito
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
