import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
   build: {
      lib: {
         entry: resolve(__dirname, 'lib/index.js'),
         name: '@neuekit/utils',
         fileName: 'utils', // the proper extensions will be added
         formats: ['es']
      },
      rollupOptions: {
         output: {
            globals: { 'svelte/store': 'sveltestore' }
         },
         external: ['svelte/store'],
         treeshake: { moduleSideEffects: false }
      }
   }
})
