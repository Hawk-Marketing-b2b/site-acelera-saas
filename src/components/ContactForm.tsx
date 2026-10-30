import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { reportLead, trackingPermitted } from "@/lib/tracking";

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
    instagram: "",
    faturamento: "",
    usuarios: "",
  });
  const [utmData, setUtmData] = useState({
    utm_source: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    utm_medium: "",
    referrer: "",
  });
  const navigate = useNavigate();
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
    const permittedAtSubmission = trackingPermitted();

    try {
      const payload = new URLSearchParams({
        nome: formData.nome,
        email: formData.email,
        whatsapp: formData.whatsapp,
        site: formData.site,
        instagram: formData.instagram,
        faturamento: formData.faturamento,
        usuarios: formData.usuarios,
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

      // no-cors confirms browser completion only, not n8n receipt.
      reportLead(permittedAtSubmission);

      toast.success("Enviado com sucesso!", {
        description: "Em breve um especialista entrará em contato.",
      });

      onSuccess?.();
      navigate({ to: "/obrigado" });
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

      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Seu melhor e-mail*"
          value={formData.email}
          onChange={(e) => {
            handleChange(e);
            if (emailError) setEmailError("");
          }}
          className={`${inputClasses} ${emailError ? "ring-2 ring-red-500 border-red-500" : ""}`}
        />
        {emailError && (
          <p className="mt-1 text-sm text-red-500">{emailError}</p>
        )}
      </div>

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
        required
        placeholder="Site da empresa*"
        value={formData.site}
        onChange={handleChange}
        className={inputClasses}
      />

      <input
        type="text"
        name="instagram"
        required
        placeholder="Instagram*"
        value={formData.instagram}
        onChange={handleChange}
        className={inputClasses}
      />


      <div className="relative">
        <select
          name="faturamento"
          required
          value={formData.faturamento}
          onChange={handleChange}
          className={`${inputClasses} min-w-0 appearance-none pr-10 text-xs lg:text-sm`}
        >
          <option value="" disabled>Qual o seu faturamento mensal?*</option>
          <option value="ate-10k">Até R$ 10 mil</option>
          <option value="10k-30k">De R$ 10 mil a R$ 30 mil</option>
          <option value="30k-50k">De R$ 30 mil a R$ 50 mil</option>
          <option value="50k-100k">De R$ 50 mil a R$ 100 mil</option>
          <option value="100k-250k">De R$ 100 mil a R$ 250 mil</option>
          <option value="250k-500k">De R$ 250 mil a R$ 500 mil</option>
          <option value="mais-500k">Mais de R$ 500 mil</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      </div>

      <div className="relative">
        <select
          name="usuarios"
          required
          value={formData.usuarios}
          onChange={handleChange}
          className={`${inputClasses} min-w-0 appearance-none pr-10 text-xs lg:text-sm`}
        >
          <option value="" disabled>Quantos usuários ativos tem seu SaaS?*</option>
          <option value="sem-usuarios">Ainda não tenho usuários ativos</option>
          <option value="ate-10">Até 10 usuários</option>
          <option value="10-50">De 10 a 50</option>
          <option value="50-200">De 50 a 200</option>
          <option value="200-500">De 200 a 500</option>
          <option value="500-1000">De 500 a 1.000</option>
          <option value="1000-5000">De 1.000 a 5.000</option>
          <option value="acima-5000">Acima de 5.000</option>
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
