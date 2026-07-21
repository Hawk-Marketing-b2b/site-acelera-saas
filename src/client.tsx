import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// The route tree's __root renders <html><body><div id="root">…</div></body></html>,
// so the client must own the whole document. If SSR already produced the shell
// (preview / production HTML from generate-html.js), hydrate it; otherwise
// (rare fallback with an empty document), create a root on <html>.
const hasSSRShell = document.getElementById("root")?.hasChildNodes();

if (hasSSRShell) {
  hydrateRoot(document, app);
} else {
  document.documentElement.innerHTML = "";
  createRoot(document.documentElement).render(app);
}
