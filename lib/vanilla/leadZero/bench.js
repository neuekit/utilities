/* Imports */
import Benchmark from 'benchmark'
import leadZero from './index.js'

/* Setup */
const number = 10

/* Benchmark */
const bench = new Benchmark('leadZero', () => leadZero(number, 4))

/* Result */
bench.on('complete', e => console.log(String(e.target)))
bench.run()
