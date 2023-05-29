/* Imports */
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import throttle from './index.js'

/* Setup */
const fn = () => console.log('Throttled')
const throttledFn = throttle(fn, 1000)

/* Test */
test('throttle', () => {
   assert.type(throttledFn, 'function')
})

/* Result */
test.run()
