// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// STATIC_BUILD=1 é definido só no GitHub Actions (deploy para o GitHub Pages).
// Nesse modo: sem servidor (nitro/Cloudflare desligado) e cada rota é pré-renderizada
// em HTML estático (index.html, inbound-marketing/index.html, ...), com conteúdo e
// meta tags reais — nada de index.html montado à mão.
// Fora dele (preview e build do Lovable) o comportamento padrão do Lovable é mantido.
const isStaticBuild = process.env.STATIC_BUILD === "1";

export default defineConfig(
  isStaticBuild
    ? {
        nitro: false,
        tanstackStart: {
          prerender: {
            enabled: true,
            crawlLinks: true, // descobre automaticamente toda página linkada no site
            failOnError: true, // se uma página quebrar no render, o deploy falha (o site no ar não é afetado)
          },
          // 404.html: a rota catch-all (src/routes/$.tsx) renderizada em /404.html,
          // que o GitHub Pages serve para qualquer URL inexistente
          pages: [{ path: "/404", prerender: { enabled: true, outputPath: "/404", autoSubfolderIndex: false } }],
        },
        // servidor temporário usado só durante o pré-render; IPv4 explícito evita
        // falha em runners sem IPv6 (o padrão do Lovable é host "::")
        vite: { preview: { host: "127.0.0.1" } },
      }
    : {},
);
