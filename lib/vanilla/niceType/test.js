/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import niceType from './index.js'

/* Setup */
const sentence =
   "constantly seek criticism.\fa WELL THOUGHT out critique\nof what you're doing is\nas valuable as gold"
const title = 'elon musk'

/* Test */
test('niceType', () => {
   assert.type(niceType, 'function')
   assert.is(
      niceType(sentence),
      "Constantly seek criticism. A well thought out critique of what you're doing is as valuable as gold"
   )
   assert.is(niceType(title, true), 'Elon Musk')
})

/* Result */
test.run()
