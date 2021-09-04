/* Imports */
import Benchmark from 'benchmark'
import query from './index.js'

/* Setup */
const data = { one: 1, two: 'he.*g', three: ['a', 'b'] }
const str = 'one=1&two=he.*g&three=a&three=b'

/* Benchmark */
const bench = new Benchmark.Suite

bench.add('encode', () => query(data, '?'))
bench.add('decode', () => query(str))

/* Result */
bench.on('cycle', e => console.log(String(e.target)))
bench.run()