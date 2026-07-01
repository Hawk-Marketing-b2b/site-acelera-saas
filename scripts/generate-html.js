import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const outputRoots = ['dist/client', 'dist', '.output/public', '.output/server/public', 'build/client', 'build'];

function listDir(dir) {
  return existsSync(dir) ? readdirSync(dir).join(', ') : `${dir} não existe`;
}

function findClientDir() {
  const directMatch = outputRoots.find((dir) => existsSync(path.join(dir, 'assets')));

  if (directMatch) {
    return directMatch;
  }

  const rootsToSearch = ['dist', '.output', 'build'].filter((dir) => existsSync(dir));

  for (const root of rootsToSearch) {
    const stack = [root];

    while (stack.length) {
      const current = stack.pop();
      const assetsPath = path.join(current, 'assets');

      if (existsSync(assetsPath)) {
        return current;
      }

      for (const entry of readdirSync(current, { withFileTypes: true })) {
        if (entry.isDirectory()) {
          stack.push(path.join(current, entry.name));
        }
      }
    }
  }

  return null;
}

const clientDir = findClientDir();

if (!clientDir) {
  throw new Error(
    [
      'Pasta de assets não encontrada após o build.',
      `Conteúdo de dist: ${listDir('dist')}`,
      `Conteúdo de .output: ${listDir('.output')}`,
      `Conteúdo de build: ${listDir('build')}`,
    ].join('\n'),
  );
}

const assetsDir = path.join(clientDir, 'assets');
const assets = readdirSync(assetsDir);

const jsCandidates = assets.filter((f) => f.startsWith('index-') && f.endsWith('.js'));
const jsEntry =
  jsCandidates.find((f) => {
    const content = readFileSync(path.join(assetsDir, f), 'utf8');
    return content.includes('Root container #root') || content.includes('createRoot(');
  }) ?? jsCandidates[0];
const cssEntry = assets.find((f) => f.endsWith('.css'));

if (!jsEntry) {
  throw new Error(`Arquivo JS de entrada não encontrado em ${assetsDir}`);
}

console.log('JS encontrado:', jsEntry);
console.log('CSS encontrado:', cssEntry);
console.log('Pasta do site encontrada:', clientDir);

const cssLink = cssEntry ? `<link rel="stylesheet" href="/assets/${cssEntry}">` : '';

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Agência de Marketing para SaaS | Acelera SaaS</title>
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="apple-touch-icon" href="/favicon.png">
  ${cssLink}
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/${jsEntry}"></script>
</body>
</html>`;

writeFileSync(path.join(clientDir, 'index.html'), html);
writeFileSync(path.join(clientDir, '404.html'), html);
console.log('index.html e 404.html gerados com sucesso!');
