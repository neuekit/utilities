/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import getIndex from './index.js'

/* Setup */
const arr = [{ testA: 1, testB: 2 }, { testA: 3, testB: 4 }]

/* Test */
test('getIndex', () => {
   assert.type(getIndex, 'function')
   assert.is(getIndex(arr, 'testA', 3), 1)
})

/* Result */
test.run()