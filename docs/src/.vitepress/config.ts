import { defineConfig } from 'vitepress'
import ElementPlus from 'unplugin-element-plus/vite'
import themeConfig from './config/themeConfig'
import headConfig from './config/headConfig'
import markdownConfig from './config/markdownConfig'

export default defineConfig({
  base: process.env.VITE_BASE || '/',
  outDir: '../dist',
  lastUpdated: true,
  cleanUrls: true,
  title: 'Manga OCR Mobile',
  description: 'Technical documentation for Manga OCR Mobile',
  head: headConfig,
  markdown: markdownConfig,
  themeConfig,
  vite: {
    plugins: [ElementPlus({})],
    ssr: {
      noExternal: ['element-plus'],
    },
  },
})
