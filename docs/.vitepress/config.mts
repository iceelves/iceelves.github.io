import { defineConfig } from 'vitepress'
import zh from './locales/zh.mts'
import en from './locales/en.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',

  // 百度站长校验
  head: [
    ['meta', { name: 'baidu-site-verification', content: 'codeva-5OyBY8hx8L' }]
  ],

  // 国际化多语言
  locales: {
    en: en,
    zh: zh,
  },
})
