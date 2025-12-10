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

// 格式化 URL，去除 index.html 并去掉 .html 扩展名
const pages = readPages(distPath).map(file =>
  file
    .replace(distPath, '')               // 去掉 dist 绝对路径
    .replace(/\\/g, '/')                 // 把 \ 转成 /
    .replace(/\/index\.html$/, '/')      // 去除 /index.html
    .replace(/\.html$/, '')              // 去除 .html 扩展名
)
// 跟路径为跳转页面，去掉根路径 '/' 页面
.filter(p => p !== '/');

// 设置页面的优先级
const getPriority = (page) => {
  if (page === '/en/' || page === '/zh/' ||
    page === '/en/Pano/' || page === '/zh/Pano/') {
    return 1.0; // 根目录优先级最高
  } else {
    return 0.9; // 默认优先级
  }
};

// 生成 sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => {
  const priority = getPriority(p); // 根据页面路径设置优先级
  return `
  <url>
    <loc>${domain}${p}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${priority}</priority>
  </url>`;
}).join('')}
</urlset>`;

// 写入文件
fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);

console.log('✔ sitemap.xml generated.');
