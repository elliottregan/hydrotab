import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'
import inject from '@rollup/plugin-inject';

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
    inject({
      browser: ['webextension-polyfill-ts', 'browser'],
    })
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        'main': './index.html',
        'background': './background.html',
        'popup': './popup.html',
      },
      output: {
        entryFileNames: '[name].js',
      }
    }
  }
})
