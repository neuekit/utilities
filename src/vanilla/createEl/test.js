/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import createEl from './index.js'
import 'global-jsdom/register'

/* Setup */
const elem = createEl('button', { width: '100px' })

/* Test */
test('createEl', () => {
   assert.type(createEl, 'function')
   assert.is(elem.tagName, 'BUTTON')
   assert.is(elem.getAttribute('width'), '100px')
})

/* Result */
test.run()