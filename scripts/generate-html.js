import { readdirSync, writeFileSync } from 'fs';

const assets = readdirSync('dist/client/assets');

const jsEntry = assets.find(f => f.startsWith('index-') && f.endsWith('.js') && !f.includes('MNgUKEw9'));
const cssEntry = assets.find(f => f.endsWith('.css'));

console.log('JS encontrado:', jsEntry);
console.log('CSS encontrado:', cssEntry);

const cssLink = cssEntry ? `<link rel="stylesheet" href="/assets/${cssEntry}">` : '';

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Agência de Marketing para SaaS | Acelera SaaS</title>
  ${cssLink}
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/${jsEntry}"></script>
</body>
</html>`;

writeFileSync('dist/client/index.html', html);
writeFileSync('dist/client/404.html', html);
console.log('index.html e 404.html gerados com sucesso!');
