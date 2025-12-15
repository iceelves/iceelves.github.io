import { defineConfig } from 'vitepress'
import zh from './locales/zh.mts'
import en from './locales/en.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',

  // 国际化多语言
  locales: {
    en: en,
    zh: zh,
  },
})