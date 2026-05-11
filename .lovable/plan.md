## Objetivo

Recriar fielmente o efeito visual de fundo da hero do acelerasaas.com no nosso `BackgroundFx`: **feixes finos diagonais coloridos**, parecidos com meteoros/shooting stars, em vez dos gradientes "faixa larga" que estão lá hoje.

## O que observei no site original

Inspecionei a hero ao vivo (2 screenshots em momentos diferentes):

- Linhas **muito finas** (1–2 px), nítidas, com leve glow.
- Inclinação de ~115° (cima-direita → baixo-esquerda).
- **Comprimentos variados**: alguns atravessam toda a seção, outros são curtos (rastro tipo meteoro).
- Cores: azul ciano, azul cobalto, magenta/rosa, verde-água, roxo claro.
- Espalhamento irregular, densidade média (~12 feixes visíveis).
- **Animação**: feixes se deslocam (shooting stars). Posições mudaram entre screenshots.
- Não é uma imagem nem SVG estático único — são elementos individuais animados.

## Implementação

### 1. Reescrever `src/components/site/BackgroundFx.tsx`

Manter os 2 orbes roxo/magenta + grid existentes (são bons e batem com o site original na borda). **Remover** o bloco atual de "feixes" baseado em `linear-gradient` (faixas largas borradas — não é o que se quer).

Adicionar uma camada nova de **meteoros em SVG**:

- Um único `<svg>` absoluto cobrindo a seção (`absolute inset-0 w-full h-full`), com `viewBox="0 0 1440 800"` e `preserveAspectRatio="none"` (ou `xMidYMid slice` se preferir manter proporção).
- Dentro: um `<defs>` com:
  - 1 `<linearGradient>` por cor (ciano, cobalto, magenta, verde-água, roxo claro), todos com mesma direção (~115°), começando transparente → cor sólida → transparente. Isso dá o efeito de "rastro".
  - 1 `<filter id="beam-glow">` com `feGaussianBlur stdDeviation="1.5"` + `feMerge` pra dar o halo.
- Cerca de **12 `<line>`** (ou `<rect>` finos rotacionados) com:
  - `stroke-width` entre 1 e 2.
  - `stroke="url(#gradiente-cor)"`.
  - `filter="url(#beam-glow)"`.
  - Posições, comprimentos e cores variados, distribuídos por toda a seção.
  - Inclinação ~115° (`transform="rotate(25 cx cy)"` ou coordenadas calculadas).

### 2. Animação (CSS keyframes em `src/styles.css`)

Criar um keyframe `meteor` que move cada linha ao longo do próprio eixo diagonal e faz fade in/out:

```
@keyframes meteor {
  0%   { opacity: 0; transform: translate(0, 0); }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { opacity: 0; transform: translate(-200px, 90px); }
}
.animate-meteor { animation: meteor linear infinite; }
```

Aplicar a cada `<line>` com `animationDuration` e `animationDelay` distintos (entre 4s–9s, delays escalonados de -1s a -8s) para evitar pulso sincronizado e dar sensação de chuva contínua.

Respeitar `prefers-reduced-motion`: desligar a animação (manter os feixes estáticos).

### 3. Resultado

Como `BackgroundFx` já é usado tanto na home (`/`) quanto na `/inbound-marketing`, **as duas páginas ganham o efeito automaticamente** — padronização mantida.

## Arquivos a alterar

- `src/components/site/BackgroundFx.tsx` — reescrever camada de feixes (SVG + filtros).
- `src/styles.css` — adicionar keyframes `meteor` + classe utilitária + media query `prefers-reduced-motion`.

Nenhum novo asset, nenhuma nova dependência.

## Fora de escopo

- Não copio o carrinho de F1 que aparece no canto direito do site original (asset de marca específico deles).
- Não vou alterar texto, layout, cards ou qualquer outra parte da hero — só o background decorativo.
