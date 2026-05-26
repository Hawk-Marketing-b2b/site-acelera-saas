import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShinyButton } from "@/components/ui/shiny-button";
import ContactForm from "./ContactForm";
import AuroraBackground from "./AuroraBackground";
import f1Car from "@/assets/f1-car-acelera.png";

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <AuroraBackground />

      <div className="absolute -right-20 bottom-0 w-[600px] h-[300px] opacity-[0.07] pointer-events-none hidden lg:block">
        <img src={f1Car} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      <div className="w-full px-4 relative z-10 pt-24 pb-8 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8 flex flex-col items-center">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm opacity-0 animate-fade-up"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            <span className="text-sm font-medium text-muted-foreground">
              O maior ecossistema de vendas para SaaS
            </span>
          </div>

          <div
            className="space-y-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight heading-gradient">
              Acelere as Vendas do seu SaaS
            </h1>
            <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold heading-gradient">
              e Domine o Mercado
            </p>
          </div>

          <p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            Geramos demanda qualificada para empresas de software B2B com uma metodologia validada em mais de{" "}
            <strong className="text-foreground">400 projetos</strong> e{" "}
            <strong className="text-foreground">20 anos</strong> de experiência.
          </p>

          <div
            className="flex justify-center pt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <ShinyButton onClick={() => setIsFormOpen(true)} className="group">
              Quero Acelerar Meu SaaS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </ShinyButton>
          </div>
        </div>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold text-center">
              Fale com um Especialista
            </DialogTitle>
            <p className="text-muted-foreground text-sm text-center">
              Receba um diagnóstico estratégico gratuito
            </p>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsFormOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
