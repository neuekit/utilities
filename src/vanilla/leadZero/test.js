/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import leadZero from './index.js'

/* Setup */
const number = 10

/* Test */
test('leadZero', () => {
   assert.type(leadZero, 'function')
   assert.is(leadZero(number, 4), '0010')
})

/* Result */
test.run()
