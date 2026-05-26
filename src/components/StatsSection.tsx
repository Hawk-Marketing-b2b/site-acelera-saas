import { Users, DollarSign, TrendingUp } from "lucide-react";
import helmetImg from "@/assets/helmet-acelera.png";

const stats = [
  { icon: Users, value: "+400", suffix: "", label: "Saas Atendidos" },
  { icon: DollarSign, value: "+1", suffix: " Bi", label: "de Aumento em receita" },
  { icon: TrendingUp, value: "+R$40", suffix: " milhões", label: "investidos em anúncios" },
];

const StatsSection = () => {
  return (
    <section className="py-[30px] md:py-20 px-4 bg-gradient-to-b from-black via-[#0a0a1a] to-black relative overflow-hidden">
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.08] pointer-events-none hidden lg:block">
        <img src={helmetImg} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex justify-center mb-6 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Resultados Comprovados</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center heading-gradient mb-16 px-4">
          Alguns números de nossa aceleradora
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</span>
                <span className="text-xl md:text-2xl font-bold text-primary">{stat.suffix}</span>
              </div>
              <p className="text-white/70 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
