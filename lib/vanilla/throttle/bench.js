/* Imports */
import Benchmark from 'benchmark'
import throttle from './index.js'

/* Setup */
const fn = () => console.log('Throttled')
const throttledFn = throttle(fn, 1000)

/* Benchmark */
const bench = new Benchmark('throttle', () => throttledFn())

/* Result */
bench.on('complete', e => console.log(String(e.target)))
bench.run()
