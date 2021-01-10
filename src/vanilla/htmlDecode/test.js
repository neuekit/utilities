/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import htmlDecode from './index.js'

/* Setup */
const str = '&#72;&#101;&#108;&#108;&#111;'

/* Test */
test('htmlDecode', () => {
   assert.type(htmlDecode, 'function')
   assert.is(htmlDecode(str), 'Hello')
})

/* Result */
test.run()