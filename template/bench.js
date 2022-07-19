/* Imports */
import Benchmark from 'benchmark'
import yourModuleName from './index.js'

/* Setup */
const str = 'Some data your module needs'

/* Benchmark */
const bench = new Benchmark('yourModuleName', () => yourModuleName(str))

/* Result */
bench.on('complete', e => console.log(String(e.target)))
bench.run()
