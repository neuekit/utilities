/* Rollup plugins */
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

/* Packages */
import 'dotenv/config'

/* Assignments */
const api_url = process.env.API_URL
const plugins = [
   babel({
      babelHelpers: 'bundled',
      include: ['src/**'],
      presets: [['@babel/env']]
   }),
   commonjs(),
   replace({ 'process.env.API_URL': JSON.stringify(api_url) }),
   resolve(),
   terser()
]

/* Config */
export default [
   {
      input: './sandbox/index.js',
      output: {
         file: './sandbox/bundle.js',
         format: 'iife',
         name: 'NeueKit',
         globals: { 'svelte/store': 'sveltestore' }
      },
      plugins,
      external: ['svelte/store'],
      treeshake: { moduleSideEffects: false }
   }
]
