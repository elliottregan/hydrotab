import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy2'
import inject from '@rollup/plugin-inject';
import zip from 'rollup-plugin-zip';

export default defineConfig({
  plugins: [
    vue(),
    copy({
      assets: [
        [
          'public/manifest.json',
          'manifest.json'
        ],
        [
          'public/wave.png',
          'wave.png'
        ],
        [
          'public/wave.svg',
          'wave.svg'
        ],
      ],
    }),
    zip(),
  ],
  build: {
    write: true,
    target: 'esnext',
    rollupOptions: {
      input: {
        'main': './index.html',
        'background': './background.html',
        'popup': './popup.html',
      },
      output: {
        entryFileNames: '[name].js',
      },
      plugins: [
        inject({
          browser: ['webextension-polyfill-ts', 'browser'],
        }),
      ]
    }
  }
})
