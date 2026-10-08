import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/site/NotFound";

// Rota "catch-all": qualquer URL que não corresponde a uma página.
// No build estático ela é pré-renderizada como 404.html, que o GitHub Pages
// devolve (com status 404) para qualquer endereço inexistente.
export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Página não encontrada | Acelera SaaS" },
      { name: "robots", content: "noindex" },
    ],
  }),
  // renderizada só no navegador: a URL real (ex: /pagina-x) difere da usada no build (/404),
  // e sem isso o React acusaria divergência de hidratação
  ssr: false,
  component: NotFound,
});
