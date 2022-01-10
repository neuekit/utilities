/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import tristate from './index.js'

/* Test */
test('tristate', () => {
   assert.type(tristate, 'function')
   assert.is(tristate(true), 1)
   assert.is(tristate(false), -1)
   assert.is(tristate(undefined), 0)
})

/* Result */
test.run()