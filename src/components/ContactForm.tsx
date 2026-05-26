import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    onSuccess?.();
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <h3 className="text-xl font-semibold text-foreground">Mensagem enviada!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Em breve um especialista entrará em contato.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Nome</label>
        <input
          type="text"
          required
          placeholder="Seu nome"
          className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">E-mail</label>
        <input
          type="email"
          required
          placeholder="voce@email.com"
          className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Empresa</label>
        <input
          type="text"
          placeholder="Nome da empresa"
          className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Mensagem</label>
        <textarea
          rows={4}
          placeholder="Como podemos ajudar?"
          className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
        style={{
          background: "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
          boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
        }}
      >
        Enviar mensagem
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
