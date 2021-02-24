import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        {
          src: './public/manifest.json',
          dest: './dist'
        }
      ],
      hook: 'writeBundle'
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        'main': './index.html',
        'background': './background.html',
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
})
