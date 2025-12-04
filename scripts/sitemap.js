import { glob } from 'glob'
import { createWriteStream } from 'fs'
import { SitemapStream } from 'sitemap'

// 域名 不带斜杠
const siteUrl = 'https://iceelves.com'

async function generateSitemap() {
  // 扫描所有 Markdown 文件（排除 README）
  const pages = await glob('docs/**/*.md', {
    ignore: ['**/node_modules/**', '**/README.md']
  })

  const sitemap = new SitemapStream({ hostname: siteUrl })
  const writeStream = createWriteStream('docs/.vitepress/dist/sitemap.xml')
  sitemap.pipe(writeStream)

  pages.forEach((page) => {
    let url = page
      .replace('docs/', '')
      .replace(/\.md$/, '')
      .replace(/index$/, '')

    // 根路径特殊处理
    if (url === '') url = '/'

    // 添加英文和中文映射 hreflang
    const links = []

    if (url.startsWith('zh/')) {
      links.push({
        lang: 'en', url: url.replace('zh/', '')
      })
      links.push({
        lang: 'zh', url
      })
    } else {
      links.push({
        lang: 'en', url
      })
      links.push({
        lang: 'zh', url: 'zh/' + url.replace(/^\//, '')
      })
    }

    sitemap.write({
      url,
      links,
      lastmod: new Date().toISOString()
    })
  })

  sitemap.end()
  writeStream.on('finish', () => console.log('sitemap.xml generated!'))
}

generateSitemap()
