/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import query from './index.js'

/* Setup */
const data = { one: 1, two: 'he.*g', three: ['a', 'b'] }

/* Test */
test('encode', () => {
   assert.type(query, 'function')
   assert.is(query(data), 'one=1&two=he.*g&three=a&three=b')
})

test('dencode', () => {
   assert.type(query, 'function')
   assert.equal(query('one=1&two=he.*g&three=a&three=b'), data)
})

/* Result */
test.run()