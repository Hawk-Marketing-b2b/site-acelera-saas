## Diagnóstico confirmado

O conteúdo não foi removido e a cor das seções não é o problema.

- As seis páginas de serviço escondem quase todo o conteúdo intermediário com a animação `ScrollReveal`.
- Essa animação começa com opacidade zero e só aparece quando o código do navegador adiciona a classe `in-view`.
- Testei todas as seis páginas: existem 173 blocos animados e nenhum recebe `in-view`.
- A causa é a inicialização atual do site: `src/client.tsx` procura um elemento `#root`, mas o documento gerado pelo TanStack Start não contém esse elemento. Assim, o site mostra o HTML inicial, porém não ativa animações, botões ou formulários.
- A primeira seção permanece visível porque usa animação somente em CSS. A última seção não depende de `ScrollReveal`, por isso também aparece.

## Correção proposta

1. Remover a inicialização SPA personalizada de `src/client.tsx`, que conflita com o documento do TanStack Start.
2. Restaurar a hidratação nativa do TanStack Start, mantendo intacto o `shellComponent` obrigatório em `src/routes/__root.tsx`.
3. Não alterar textos, cores, conteúdo, estrutura das páginas, configuração do GitHub Pages ou fluxo de publicação.
4. Validar no navegador todas as seis páginas de serviço:
   - conteúdo intermediário aparece ao rolar;
   - botões abrem o formulário;
   - não há tela preta, erros ou travamentos;
   - página inicial e publicação estática continuam abrindo normalmente.

## Páginas verificadas

- `/inbound-marketing`
- `/performance`
- `/vendas`
- `/comercial`
- `/web-design`
- `/ia-e-automacao`
