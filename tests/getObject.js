import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { getObject } from '../src/vanilla'

test('getObject', () => {
   const arr = [{ testA: 1, testB: 2 }, { testA: 3, testB: 4 }]
   
   assert.type(getObject, 'function')
   assert.is(getObject(arr, 'testA', 3), arr[1])
})

test.run()