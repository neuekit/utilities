import createEl from '../vanilla/createEl/index.js'
import { query } from '../vanilla/index.js'

/**
 * Allows for programmatic insertion of Google Maps script
 * @memberof Integrations
 * @version 1.1.0
 * @param {object} options the Google Maps Api params
 */
export default function (options = {}) {
   let script = document.getElementById('neuekitGoogle')

   if (script) {
      script.onload = window[options.callback]
      return
   }

   script = createEl('script', {
      src: 'https://maps.googleapis.com/maps/api/js?' + query(options),
      id: 'neuekitGoogle',
      async: '',
      defer: ''
   })

   document.head.appendChild(script)
}
