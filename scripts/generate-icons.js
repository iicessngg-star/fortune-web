const fs = require('fs');
const path = require('path');

// Create icons directory
const dir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Minimal 1x1 transparent PNG (valid PNG bytes)
// We'll create a proper placeholder using SVG embedded as data
const svg192 = `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192">
  <rect width="192" height="192" fill="#030118"/>
  <circle cx="96" cy="96" r="80" fill="none" stroke="#f0a800" stroke-width="4" opacity="0.5"/>
  <text x="96" y="120" font-family="serif" font-size="80" text-anchor="middle" fill="#f0a800">✦</text>
  <text x="96" y="170" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#ffd84e">MYSTIC CRYSTAL</text>
</svg>`;

const svg512 = svg192.replace(/192/g, '512').replace(/96/g, '256').replace(/80"/g, '220"').replace('80" ', '220" ').replace('font-size="80"', 'font-size="200"').replace('font-size="12"', 'font-size="30"').replace('y="120"', 'y="300"').replace('y="170"', 'y="440"');

fs.writeFileSync(path.join(dir, 'icon-192.svg'), svg192);
fs.writeFileSync(path.join(dir, 'icon-512.svg'), svg192.replace(/192/g, '512'));

console.log('Created SVG icons in public/icons/');
console.log('Note: For production, convert SVGs to PNG using a tool like sharp or Inkscape');
