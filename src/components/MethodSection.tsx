import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Megaphone, Settings, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShinyButton } from "@/components/ui/shiny-button";
import ContactForm from "@/components/ContactForm";
import helmetImg from "@/assets/helmet-acelera.png";

const steps = [
  { number: "01", icon: Search, title: "Diagnóstico e Estratégia", description: "Imersão profunda no seu negócio, mapeamento da jornada do cliente B2B e definição de metas claras." },
  { number: "02", icon: Megaphone, title: "Geração de Demanda Qualificada", description: "Atraímos clientes ideais através de canais estratégicos com nossa tecnologia própria de I.A." },
  { number: "03", icon: Settings, title: "Otimização da Máquina de Vendas", description: "Implementação de CRM, treinamento comercial e capacitação do time de vendas." },
  { number: "04", icon: Heart, title: "Retenção e Expansão (LTV)", description: "Preparamos seu time de CS para sucesso do cliente e maximização do Life-Time Value." },
];

const MethodSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="metodo" className="py-[30px] md:py-24 px-4 bg-black relative overflow-hidden">
      <div className="absolute -left-16 top-1/3 w-[350px] h-[350px] opacity-[0.06] pointer-events-none hidden lg:block rotate-[-15deg]">
        <img src={helmetImg} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">
              <span className="text-muted-foreground">Resultado:</span>{" "}
              <span className="text-primary font-medium">Crescimento Exponencial</span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-gradient mb-6">O Método Acelera SaaS</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Um funil de transformação validado em mais de 400 projetos SaaS
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-3xl font-bold text-white/20 shrink-0">{step.number}</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center mt-8"
        >
          <ShinyButton onClick={() => setIsFormOpen(true)} className="group">
            Quero Acelerar Meu SaaS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </ShinyButton>
        </motion.div>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Fale com um Especialista</DialogTitle>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsFormOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MethodSection;
