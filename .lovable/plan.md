Aqui está um prompt pronto que você pode colar em outras conversas do Lovable para padronizar os ícones com o estilo da página de Inbound Marketing:

---

**Prompt para colar:**

> Quero padronizar todos os ícones desta página seguindo o mesmo sistema visual que já uso na página de Inbound Marketing do Acelera SaaS. Use Lucide React e os tokens semânticos do design system (`--primary`, `--secondary`, `--gradient-button`, `--shadow-button`, `--purple-light`, `border`, `muted`, etc.) — nada de cores hardcoded.
>
> **Padrões de ícone (use o mesmo de acordo com o contexto):**
>
> 1. **Ícone "destaque/dor" (vermelho sutil):** container `grid size-10 place-items-center rounded-lg bg-destructive/15 text-destructive` com ícone `size-5`. Usar para problemas, alertas e pontos negativos.
>
> 2. **Ícone "principal/feature" (gradiente roxo→magenta):** container `grid size-12 place-items-center rounded-xl bg-gradient-button shadow-button transition-transform duration-300 group-hover:scale-110` com ícone `size-5 text-primary-foreground`. Usar para benefícios, features principais e CTAs visuais.
>
> 3. **Ícone "secundário/suporte" (outline roxo):** container `grid size-12 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20` com ícone `size-5 text-purple-light`. Usar para listas de serviços, etapas e informações de apoio.
>
> 4. **Ícone "resultado/métrica" (gradiente grande, centralizado):** container `mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-button shadow-button transition-transform duration-300 hover:scale-110` com ícone `size-6 text-primary-foreground`. Usar para cards centralizados de resultados/números.
>
> 5. **Ícone inline em badges/listas:** apenas `size-3.5 text-purple-light` (ex: `CheckCircle2`) dentro de pílulas ou bullets.
>
> 6. **Ícones de seta/indicadores sutis:** `size-3` a `size-5` com `text-primary/50` ou `text-purple-light`, podendo ter `animate-subtle-pulse` ou `animate-float`.
>
> **Regras gerais:**
> - Sempre dentro de cards `card-glass rounded-2xl p-7` quando agrupados.
> - Hover do card pai: `hover:-translate-y-1 hover:border-primary/40` e às vezes `hover:shadow-glow`.
> - Use sempre ícones do `lucide-react`, escolhendo o ícone semanticamente mais adequado ao conteúdo (não troque o significado).
> - Mantenha tudo responsivo e acessível.
>
> Aplique esses padrões aos ícones existentes da página, sem alterar o conteúdo nem a estrutura das seções.

---

Se quiser, depois posso transformar esses padrões em componentes reutilizáveis (`<IconTile variant="primary|outline|destructive|result" />`) para deixar ainda mais consistente entre páginas.