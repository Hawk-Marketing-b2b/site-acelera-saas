## Objetivo

Gerar um PDF completo, em português, explicando como o site acelerasaas.com é construído, publicado e servido. Nenhuma alteração no site.

## Conteúdo do PDF

1. **Visão geral** — o que é o site, domínio, páginas existentes (home, 6 páginas de serviço, obrigado, privacidade, 404).
2. **Tecnologias** — React 19, TanStack Start/Router, Vite 7, Tailwind CSS v4, TypeScript, fonte Montserrat, componentes de interface.
3. **Estrutura do projeto** — pastas e arquivos principais (rotas, componentes, estilos, bibliotecas de rastreamento) e o papel de cada um.
4. **Como a página é montada** — pré-renderização estática de cada rota em HTML, depois o navegador "ativa" a página (hidratação); por que o shellComponent é obrigatório.
5. **Publicação e hospedagem** — dois ambientes:
   - Preview/publicação do Lovable (service-shine-51.lovable.app).
   - Site oficial: GitHub Actions (Node 22, npm install, build estático, teste automático das páginas) → branch gh-pages → GitHub Pages com domínio acelerasaas.com. Diagrama do fluxo.
6. **Formulário de contato** — campos, envio ao webhook n8n (modo sem CORS), UTMs capturadas, redirecionamento para /obrigado, formulário inline e janela compartilhando a mesma lógica.
7. **Rastreamento** — Google Tag Manager (GTM-NQZH2L93) e Meta Pixel (1051251949505769): PageView no código, Lead disparado só pelo GTM (evita duplicidade), eventos no dataLayer.
8. **Regras de manutenção** — o que nunca alterar (shellComponent, workflow de deploy, vite.config), cuidados ao editar.
9. **Pontos de atenção** — Lead conta envio no navegador, não confirmação do n8n; contêiner GTM coleta dados do formulário (responsabilidade LGPD); política /privacidade a revisar.

## Como será feito

- Ler os arquivos reais (package.json, rotas, workflow, vite.config, tracking) para confirmar cada informação antes de escrever.
- Gerar com reportlab, fonte com suporte a acentos, diagramas simples, cores da marca.
- Converter cada página em imagem e revisar visualmente antes de entregar.
- Salvar em Files como `arquitetura-acelerasaas.pdf`.
