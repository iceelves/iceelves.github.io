import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 你的域名（不要加结尾斜杠）
const domain = 'https://iceelves.com';

// dist 路径
const distPath = path.resolve(__dirname, '../docs/.vitepress/dist');

// 递归读取 dist 中所有 HTML 文件
function readPages(dir) {
  let list = fs.readdirSync(dir);
  let results = [];

  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(readPages(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });

  return results;
}

const pages = readPages(distPath).map(file =>
  file.replace(distPath, '') // 去掉绝对路径
);

// 生成 sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `
  <url>
    <loc>${domain}${p}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('')}
</urlset>`;

// 写入文件
fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);

console.log('✔ sitemap.xml generated.');
