import createEl from '../vanilla/createEl';
import { encode } from 'qss';

/**
 * Allows for programmatic insertion of Google Maps script
 * @memberof Integrations
 * @version 1.0.0
 * @param {object} options the Google Maps Api params
 */
export default function (options = {}) {
   if (document.getElementById('neuekitGoogle')) {
      window[options.callback]();
      return;
   }
   
   const script = createEl('script', {
      src: 'https://maps.googleapis.com/maps/api/js?' + encode(options),
      id: 'neuekitGoogle',
      async: '',
      defer: ''
   });

   document.head.appendChild(script);
}
