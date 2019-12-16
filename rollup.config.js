import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
   {
      input: './testing/index.js',
      output: {
         file: './dist/neuekit.js',
         format: 'iife',
         name: 'NeueKit'
      },
      plugins: [
         babel({
            exclude: [
               /\/core-js\//,
               'node_modules/**',
               'testing/**'
            ],
            presets: [[
               '@babel/env'
            ]]
         }),
         commonjs(),
         resolve()
      ]
   }
];