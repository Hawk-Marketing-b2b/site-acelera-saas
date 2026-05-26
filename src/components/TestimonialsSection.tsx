import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

const testimonials = [
  {
    quote:
      "A Acelera SAAS não apenas gerou leads qualificados, mas transformou completamente nossa operação de vendas. O treinamento do time e a implementação do CRM foram decisivos para nosso crescimento.",
    name: "Ricardo Mendes",
    role: "CEO, TechFlow Solutions",
    initials: "RM",
  },
  {
    quote:
      "Aumentamos nossa taxa de conversão em 45% em apenas 3 meses. A metodologia da Acelera SAAS é realmente diferente - eles entendem o mercado de SaaS como ninguém.",
    name: "Marina Costa",
    role: "Diretora de Vendas, DataSync Pro",
    initials: "MC",
  },
  {
    quote:
      "Procurávamos uma agência que entendesse SaaS. Encontramos muito mais: parceiros que realmente se importam com nosso crescimento e têm a expertise para entregar resultados.",
    name: "Felipe Santos",
    role: "Founder & CEO, CloudHub Brasil",
    initials: "FS",
  },
];

const TestimonialsSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="depoimentos" className="py-[30px] md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/10 to-black" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-primary">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-gradient mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Histórias reais de empresas que aceleraram seu crescimento com nossa metodologia
          </p>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/RsV-W0AabNk"
                title="Depoimento de Cliente"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary/40 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
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
          id="contato"
        >
          <ShinyButton onClick={() => setIsDialogOpen(true)}>Falar com Especialista</ShinyButton>
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Fale com um Especialista</DialogTitle>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialsSection;
