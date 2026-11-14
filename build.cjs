// Génère index.html (page complète pour GitHub Pages) à partir de src.html (corps de l'aperçu claude.ai)
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const src = fs.readFileSync(path.join(dir, 'src.html'), 'utf8');
const i = src.indexOf('<div class="nav-shell">');
const head = src.slice(0, i).replace('<meta name="claude:viewport-fit-sides" content="cover">\n', '');
const body = src.slice(i);
fs.writeFileSync(path.join(dir, 'index.html'), '<!doctype html>\n<html lang="fr">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<link rel="icon" href="logo.png">\n' + head + '</head>\n<body>\n' + body + '</body>\n</html>\n');
console.log('index.html généré');
