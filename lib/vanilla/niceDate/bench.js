/* Imports */
import Benchmark from 'benchmark'
import niceDate from './index.js'
import tinydate from 'tinydate'

/* Setup */
const str = '{YY} {MM} {DD} @ {HH}:{mm}:{ss}'

/* Benchmark */
let suite = new Benchmark.Suite()
suite.add('niceDate', () => niceDate(str))
suite.add('tinydate', () => tinydate(str))

/* Result */
suite.on('cycle', e => console.log(String(e.target)))
suite.run()
