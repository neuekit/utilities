/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import yourModuleName from './index.js'

/* Setup */
const data = 'setup data or params'

/* Test */
test('yourModuleName', () => {
   assert.type(yourModuleName, 'function')
   assert.is(yourModuleName(data), true)
})

/* Result */
test.run()
