import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";

interface ContactFormProps {
  onSuccess?: () => void;
}

const WEBHOOK_URL = "https://n8n-n8n-start.t4r0vc.easypanel.host/webhook/site-acelera-saas";

const getUtmParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    utm_medium: params.get("utm_medium") || "",
  };
};

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    site: "",
    segmento: "",
    receita: "",
  });
  const [utmData, setUtmData] = useState({
    utm_source: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    utm_medium: "",
    referrer: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    setUtmData({
      ...getUtmParams(),
      referrer: document.referrer || "",
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setIsLoading(true);

    try {
      const payload = new URLSearchParams({
        nome: formData.nome,
        email: formData.email,
        whatsapp: formData.whatsapp,
        site: formData.site,
        segmento: formData.segmento,
        receita: formData.receita,
        utm_source: utmData.utm_source,
        utm_campaign: utmData.utm_campaign,
        utm_content: utmData.utm_content,
        utm_term: utmData.utm_term,
        utm_medium: utmData.utm_medium,
        referrer: utmData.referrer,
        page_url: window.location.href,
        timestamp: new Date().toISOString(),
      });

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        mode: "no-cors",
        body: payload.toString(),
      });

      toast.success("Enviado com sucesso!", {
        description: "Em breve um especialista entrará em contato.",
      });

      onSuccess?.();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Erro ao enviar", {
        description: "Tente novamente em alguns instantes.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length === 0) return "";
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "whatsapp") {
      setFormData({ ...formData, whatsapp: formatPhone(value) });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };


  const inputClasses =
    "w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nome"
        required
        placeholder="Seu nome*"
        value={formData.nome}
        onChange={handleChange}
        className={inputClasses}
      />

      <input
        type="tel"
        name="whatsapp"
        required
        inputMode="numeric"
        placeholder="WhatsApp*"
        value={formData.whatsapp}
        onChange={handleChange}
        maxLength={16}
        className={inputClasses}
      />

      <input
        type="text"
        name="site"
        placeholder="Site da empresa"
        value={formData.site}
        onChange={handleChange}
        className={inputClasses}
      />


      <div className="relative">
        <select
          name="segmento"
          required
          value={formData.segmento}
          onChange={handleChange}
          className={`${inputClasses} appearance-none pr-10`}
        >
          <option value="" disabled>Qual é o segmento do seu SaaS?*</option>
          <option value="erp">ERP / Gestão</option>
          <option value="crm">CRM / Vendas</option>
          <option value="marketing">Marketing / Automação</option>
          <option value="rh">RH / Gestão de Pessoas</option>
          <option value="financeiro">Financeiro / Contábil</option>
          <option value="outros">Outros</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      </div>

      <div className="relative">
        <select
          name="receita"
          required
          value={formData.receita}
          onChange={handleChange}
          className={`${inputClasses} appearance-none pr-10`}
        >
          <option value="" disabled>Qual sua receita recorrente mensal?*</option>
          <option value="ate-50k">Até R$ 50mil</option>
          <option value="50k-200k">R$ 50mil - R$ 200mil</option>
          <option value="200k-500k">R$ 200mil - R$ 500mil</option>
          <option value="500k-1m">R$ 500mil - R$ 1 milhão</option>
          <option value="acima-1m">Acima de R$ 1 milhão</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-full py-6 text-base font-semibold text-white hover:-translate-y-0.5 transition-all duration-200"
        style={{
          background: "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
          boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
        }}
      >
        {isLoading ? "Enviando..." : "Falar com Especialista"}
      </Button>
    </form>
  );
};

export default ContactForm;
