/**
 * @private
 */
let googleMapsScriptIsInjected = false;

/**
 * Allows for programmatic insertion of Google Maps script
 * @memberof Integrations
 * @version 1.0.0
 * @param {object} options the Google Maps Api params
 */
export default function (options = {}) {
   if (googleMapsScriptIsInjected) {
      window[options.callback]();
      return;
   }

   const optionsQuery = Object.keys(options)
      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(options[k])}`)
      .join('&');

   const url = `https://maps.googleapis.com/maps/api/js?${optionsQuery}`;

   const script = document.createElement('script');

   script.setAttribute('src', url);
   script.setAttribute('async', '');
   script.setAttribute('defer', '');

   document.head.appendChild(script);

   googleMapsScriptIsInjected = true;
}
