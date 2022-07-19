/* Imports */
import Benchmark from 'benchmark'
import hex from './index.js'

/* Benchmark */
const bench = new Benchmark('hex', () => hex())

/* Result */
bench.on('complete', e => console.log(String(e.target)))
bench.run()
