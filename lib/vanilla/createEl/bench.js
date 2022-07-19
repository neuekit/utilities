/* Imports */
import Benchmark from 'benchmark'
import createEl from './index.js'
import 'global-jsdom/register'

/* Benchmark */
const bench = new Benchmark('createEl', () => createEl('button', { width: '100px' }))

/* Result */
bench.on('complete', e => console.log(String(e.target)))
bench.run()
