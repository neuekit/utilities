/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import cookie from './index.js'
import 'global-jsdom/register'

/* Setup */
cookie.set('test', 1, 10)

/* Test */
test('cookie', () => {
   assert.type(cookie.set, 'function')
   assert.type(cookie.get, 'function')
   assert.type(cookie.unset, 'function')
   assert.is(cookie.get('test'), '1')
   cookie.unset('test')
   assert.is(cookie.get('test'), null)
})

/* Result */
test.run()
