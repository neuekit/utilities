/* Imports */
import Benchmark from 'benchmark'
import cookie from './index.js'
import 'global-jsdom/register'

/* Setup */
cookie.set('test', 1, 10)

/* Benchmark */
const bench = new Benchmark('cookie', () => cookie.get('test'))

/* Result */
bench.on('complete', e => console.log(String(e.target)))
bench.run()
