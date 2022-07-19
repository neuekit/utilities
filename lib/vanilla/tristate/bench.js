/* Imports */
import Benchmark from 'benchmark'
import tristate from './index.js'

/* Benchmark */
const bench = new Benchmark.Suite()

bench.add('tristate 0', () => tristate(undefined))
bench.add('tristate -1', () => tristate(false))
bench.add('tristate 1', () => tristate(true))

/* Result */
bench.on('cycle', e => console.log(String(e.target)))
bench.run()
