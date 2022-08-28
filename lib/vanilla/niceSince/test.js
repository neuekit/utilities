/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import niceSince from './index.js'

/* Setup */
const data = new Date('2022-08-27')

/* Test */
test('niceSince', () => {
   assert.type(niceSince, 'function')
   assert.is(niceSince(data), 'Yesterday at 01:00')
})

/* Result */
test.run()
