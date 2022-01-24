/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import createEl from './index.js'
import * as ENV from '../../puppeteer.js'

/* Setup */
test.before(ENV.setup)
test.after(ENV.reset)

/* Test */
test('createEl', async ({ page }) => {
   const result = await page.evaluate(fn => {
      const func = new Function(`return ${fn}.apply(null, arguments)`)
      return func('button').tagName
   }, createEl.toString())
   
   assert.type(createEl, 'function')
   assert.is(result, 'BUTTON')
})

/* Result */
test.run()