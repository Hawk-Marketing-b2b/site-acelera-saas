# Architecture rules

- Use TanStack Start's generated client entry instead of a custom `src/client.tsx`, because the app hydrates the full document produced by `shellComponent`.
- Mount tracking once in the root through TrackingConsent and share permission checks with ContactForm; this preserves static prerendering and gates every event on fresh advertising choices.
- Keep consent history in browser storage on the static site, retaining notice evidence and withdrawals; do not imply a centralized record or confirmed webhook receipt when using no-cors.
- Emit GTM custom events PageView and Lead, and install Meta only directly in app code; the GTM container must respect consent and must not install a second copy of Meta.
- Reuse ContactForm for the inline home form and shared contact dialog without duplicating submission logic, so payloads and tracking remain consistent across entry points.