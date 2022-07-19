/* Imports */
import Benchmark from 'benchmark'
import niceType from './index.js'

/* Setup */
const sentence =
   "constantly seek criticism.\fa WELL THOUGHT out critique\nof what you're doing is\nas valuable as gold"
const title = 'elon musk'

/* Benchmark */
let suite = new Benchmark.Suite()

suite.add('niceType sentence', () => niceType(sentence))
suite.add('niceType title', () => niceType(title, true))

/* Result */
suite.on('cycle', e => console.log(String(e.target)))
suite.run()
