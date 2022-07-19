/* Imports */
import Benchmark from 'benchmark'
import niceTime from './index.js'

/* Setup */
const mins = 90

/* Benchmark */
const bench = new Benchmark('niceTime', () => niceTime(mins))

/* Result */
bench.on('complete', e => console.log(String(e.target)))
bench.run()
