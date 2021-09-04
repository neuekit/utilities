/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import niceDate from './index.js'

/* Setup */
const rawDate = new Date('9/8/1989 2:05:09')
const data = '{YY} {MM} {DD} @ {HH}:{mm}:{ss}'

/* Test */
test('niceDate', () => {
   assert.type(niceDate, 'function')
   assert.is(niceDate(data, rawDate), '89 08 08 @ 02:05:09')
})

/* Result */
test.run()