/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import hex from './index.js'

/* Setup */
const id = hex()

/* Test */
test('hex', () => {
   assert.type(hex, 'function')
   assert.type(id, 'string')
   assert.is(id.length, 6)
   if (id.match(/[^\w]|_/) != null) throw new Error('Duh!');
})

/* Result */
test.run()