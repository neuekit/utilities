import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const plugins = [
   babel({
      exclude: [
         /\/core-js\//,
         'node_modules/**',
         'testing/**'
      ],
      presets: [[ '@babel/env' ]]
   }),
   commonjs(),
   resolve(),
   terser()
];

export default [
   {
      input: './src/index.js',
      output: {
         file: './dist/index.js',
         format: 'esm',
         name: 'NeueKit'
      },
      plugins
   },
   {
      input: './testing/index.js',
      output: {
         file: './testing/bundle.js',
         format: 'iife',
         name: 'NeueKit'
      },
      plugins
   }
];