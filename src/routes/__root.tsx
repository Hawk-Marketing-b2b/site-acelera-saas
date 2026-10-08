import { Outlet, HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { ContactDialogProvider } from "@/components/ContactDialogProvider";
import { NotFound } from "@/components/site/NotFound";
import type { ReactNode } from "react";
import "../styles.css";

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

export const Route = createRootRoute({
  head: () => ({
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" },
    ],
  }),
  // O shellComponent é OBRIGATÓRIO no TanStack Start: é ele que gera <html>, <head>
  // (CSS + meta tags por página) e <Scripts /> (o JS que hidrata a página).
  // Sem ele o preview do Lovable fica sem estilo/JS e o build estático sai sem HTML.
  // NÃO remover e NÃO criar src/client.tsx com createRoot("#root").
  shellComponent: RootDocument,
  component: () => (
    <ContactDialogProvider>
      <Outlet />
    </ContactDialogProvider>
  ),
  notFoundComponent: NotFound,
});
