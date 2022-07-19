/* Imports */
import Benchmark from 'benchmark'
import htmlDecode from './index.js'

/* Setup */
const str = '&#72;&#101;&#108;&#108;&#111;'

/* Benchmark */
const bench = new Benchmark('htmlDecode', () => htmlDecode(str))

/* Result */
bench.on('complete', e => console.log(String(e.target)))
bench.run()
