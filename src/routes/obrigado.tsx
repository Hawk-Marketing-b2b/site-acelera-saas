import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado pelo contato | Acelera SaaS" },
      { name: "robots", content: "noindex" },
      { name: "description", content: "Recebemos seus dados. Em breve um especialista da Acelera SaaS entrará em contato." },
      { property: "og:title", content: "Obrigado pelo contato | Acelera SaaS" },
      { property: "og:description", content: "Em breve um especialista da Acelera SaaS entrará em contato." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6 pt-32 pb-16">
      <div className="max-w-xl text-center space-y-6">
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
        <h1 className="font-display text-4xl font-extrabold text-foreground lg:text-5xl">
          Obrigado pelo <span className="text-gradient-pink">contato!</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Recebemos seus dados. Em breve um especialista entrará em contato pelo WhatsApp ou e-mail.
        </p>
        <Link
          to="/"
          className="inline-flex rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Voltar para o site
        </Link>
      </div>
    </section>
  );
}
