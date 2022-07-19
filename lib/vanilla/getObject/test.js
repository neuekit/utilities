/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import getObject from './index.js'

/* Setup */
const arr = [
   { testA: 1, testB: 2 },
   { testA: 3, testB: 4 }
]

/* Test */
test('getObject', () => {
   assert.type(getObject, 'function')
   assert.is(getObject(arr, 'testA', 3), arr[1])
})

/* Result */
test.run()
