/* Imports */
import Benchmark from 'benchmark'
import niceDate from './index.js'

/* Setup */
const date = '2021-01-01T00:00:00-00:00'

/* Benchmark */
const bench = new Benchmark('niceDate', () => niceDate(date))

/* Result */
bench.on('complete', e => console.log(String(e.target)))
bench.run()