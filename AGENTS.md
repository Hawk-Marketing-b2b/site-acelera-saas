# Architecture rules

- Use TanStack Start's generated client entry instead of a custom `src/client.tsx`, because the app hydrates the full document produced by `shellComponent`.