import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
   resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@assets': path.resolve(__dirname, './assets')
    }
  },
  base: './',
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer({})
      ],
    },
  },
})
