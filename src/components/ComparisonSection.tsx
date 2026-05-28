import { motion } from "framer-motion";
import { Award, X, Check } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useContactDialog } from "@/components/ContactDialogProvider";
import f1Car from "@/assets/f1-car-acelera.png";

const comparisonData = [
  { aspect: "Foco de Mercado", generic: "Todos os segmentos", acelera: "100% SaaS B2B" },
  { aspect: "Experiência", generic: "Variável", acelera: "10+ anos em SaaS" },
  { aspect: "Metodologia", generic: "Genérica", acelera: "Própria e validada em 400+ softwares" },
  { aspect: "Capacitação Comercial", generic: "Generalista", acelera: "Especializada em venda de software" },
  { aspect: "Tecnologia", generic: "Ferramentas terceirizadas", acelera: "Tecnologia própria com I.A." },
  { aspect: "Escopo de Serviços", generic: "Marketing apenas", acelera: "Marketing + Vendas + CS + Treinamento" },
  { aspect: "Histórico", generic: "Portfólio genérico", acelera: "400+ SaaS acelerados" },
];

const ComparisonSection = () => {
  const { open } = useContactDialog();


  return (
    <section id="diferenciais" className="py-[30px] md:py-24 px-0 md:px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/10 to-black" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-[150px]" />

      <div className="absolute -right-32 bottom-0 w-[500px] h-[500px] opacity-[0.06] pointer-events-none hidden lg:block">
        <img src={f1Car} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 px-0 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Nossos Diferenciais</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-gradient mb-6">
            Por que escolher o Acelera SaaS?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare e descubra a diferença de trabalhar com especialistas em SaaS B2B
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/10">
            <div className="p-4 md:p-6">
              <span className="text-sm font-medium text-foreground">Aspecto</span>
            </div>
            <div className="p-4 md:p-6 border-l border-white/10">
              <span className="text-sm font-medium text-muted-foreground">Agências Generalistas</span>
            </div>
            <div className="p-4 md:p-6 border-l border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-primary">Acelera SaaS</span>
                <span className="hidden md:inline text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                  Recomendado
                </span>
              </div>
            </div>
          </div>

          {comparisonData.map((row, index) => (
            <div
              key={row.aspect}
              className={`grid grid-cols-3 ${index !== comparisonData.length - 1 ? "border-b border-white/10" : ""}`}
            >
              <div className="p-4 md:p-6 flex items-center">
                <span className="text-sm font-medium text-foreground">{row.aspect}</span>
              </div>
              <div className="p-4 md:p-6 border-l border-white/10 flex flex-col items-center md:flex-row md:items-center gap-1 md:gap-2">
                <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-xs md:text-sm text-muted-foreground text-center md:text-left">{row.generic}</span>
              </div>
              <div className="p-4 md:p-6 border-l border-white/10 flex flex-col items-center md:flex-row md:items-center gap-1 md:gap-2 bg-primary/[0.03]">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm text-foreground text-center md:text-left">{row.acelera}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <ShinyButton onClick={open}>Falar com Especialista</ShinyButton>
        </motion.div>
      </div>

    </section>
  );
};

export default ComparisonSection;
