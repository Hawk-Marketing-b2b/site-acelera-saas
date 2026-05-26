import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Heart, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import { ShinyButton } from "@/components/ui/shiny-button";
import f1Car from "@/assets/f1-car-acelera.png";

const commercialFeatures = [
  "Script de vendas estratégico",
  "Técnicas de negociação SaaS",
  "Gestão de pipeline e forecast",
  "Qualificação de leads (BANT/SPIN)",
];

const csFeatures = [
  "Onboarding de clientes",
  "Health Score e alertas",
  "Estratégias de upsell/cross-sell",
  "Redução de churn",
];

const TrainingSection = () => {
  const [isCommercialDialogOpen, setIsCommercialDialogOpen] = useState(false);
  const [isCsDialogOpen, setIsCsDialogOpen] = useState(false);

  return (
    <section id="treinamento" className="py-[30px] md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/10 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Capacitação de Equipes</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-gradient mb-6">
            Treinamento Comercial & CS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme seu time em uma máquina de vendas e retenção com nossa metodologia validada
          </p>
        </motion.div>

        <div className="absolute -left-24 bottom-0 w-[500px] h-[250px] opacity-[0.06] pointer-events-none hidden lg:block">
          <img src={f1Car} alt="" className="w-full h-full object-contain" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs text-primary uppercase tracking-wider font-medium">Para Times de Vendas</span>
                <h3 className="text-xl font-bold text-foreground">Treinamento Comercial</h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Capacitamos seu time comercial com técnicas avançadas de vendas consultivas específicas para software B2B.
            </p>
            <ul className="space-y-3 mb-6">
              {commercialFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <ShinyButton onClick={() => setIsCommercialDialogOpen(true)} className="w-full">
              Aumente a sua conversão
              <ArrowRight className="w-5 h-5 ml-2" />
            </ShinyButton>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs text-primary uppercase tracking-wider font-medium">Customer Success</span>
                <h3 className="text-xl font-bold text-foreground">Treinamento CS</h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Transformamos seu time de CS em especialistas em retenção e expansão de receita.
            </p>
            <ul className="space-y-3 mb-6">
              {csFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <ShinyButton onClick={() => setIsCsDialogOpen(true)} className="w-full">
              Aumente o seu LTV
              <ArrowRight className="w-5 h-5 ml-2" />
            </ShinyButton>
          </div>
        </motion.div>
      </div>

      <Dialog open={isCommercialDialogOpen} onOpenChange={setIsCommercialDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Treinamento Comercial</DialogTitle>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsCommercialDialogOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={isCsDialogOpen} onOpenChange={setIsCsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Treinamento CS</DialogTitle>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsCsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TrainingSection;
