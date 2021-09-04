/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import niceTime from './index.js'

/* Setup */
const mins = 90

/* Test */
test('niceTime', () => {
   assert.type(niceTime, 'function')
   assert.is(niceTime(mins), '1h 30m')
})

/* Result */
test.run()