/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import clamp from './index.js'

/* Test */
test('clamp', () => {
   assert.type(clamp, 'function')
   assert.is(clamp(500, 1000, 2000, 1000), 750)
})

/* Result */
test.run()
