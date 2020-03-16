import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import 'dotenv/config';

const api_url = process.env.API_URL;
const plugins = [
   babel({
      exclude: [
         /\/core-js\//,
         'dist/**',
         'node_modules/**',
         'testing/**'
      ],
      presets: [[ '@babel/env' ]]
   }),
   commonjs(),
   replace({
      'process.env.API_URL': JSON.stringify(api_url),
   }),
   resolve(),
   terser()
];

export default [
   {
      input: './testing/index.js',
      output: {
         file: './testing/bundle.js',
         format: 'iife',
         name: 'NeueKit',
         globals: { 'svelte/store': 'sveltestore' }
      },
      plugins,
      external: [ 'svelte/store' ]
   }
];