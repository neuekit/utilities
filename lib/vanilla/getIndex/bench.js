/* Imports */
import Benchmark from 'benchmark'
import getIndex from './index.js'

/* Setup */
const arr = [
   { testA: 1, testB: 2 },
   { testA: 3, testB: 4 }
]

/* Benchmark */
const bench = new Benchmark('getIndex', () => getIndex(arr, 'testA', 1))

/* Result */
bench.on('complete', e => console.log(String(e.target)))
bench.run()
