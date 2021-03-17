/* Imports */
import Benchmark from 'benchmark'
import clamp from './index.js'

/* Benchmark */
let suite = new Benchmark.Suite

suite.add('clamp in-range', () => clamp(500, 1000, 2000, 1000))
suite.add('clamp out-of-range', () => clamp(500, 1000, 2000, 3000))

/* Result */
suite.on('cycle', e => console.log(String(e.target)))
suite.run()