/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import niceSince from './index.js'

/* Setup */
const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))

/* Test */
test('niceSince', () => {
   assert.type(niceSince, 'function')
   assert.is(niceSince(yesterday).includes('Yesterday'), true)
})

/* Result */
test.run()
