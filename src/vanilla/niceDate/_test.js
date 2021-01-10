/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import niceDate from './index.js'

/* Setup */
const date = '2021-01-01T00:00:00-00:00'

/* Test */
test('niceDate', () => {
   assert.type(niceDate, 'function')
   assert.is(niceDate(date), '01 January 2021')
})

/* Result */
test.run()