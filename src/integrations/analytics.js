/**
 * Initialises a minimal Google Analytics script to track traffic
 * @memberof Integrations
 * @version 1.0.0
 * @param {string} gaID the Google Analytics id eg. UA-123456789-1
 */

export default function (gaID) {
   ;(function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r
      ;(i[r] =
         i[r] ||
         function () {
            ;(i[r].q = i[r].q || []).push(arguments)
         }),
         (i[r].l = 1 * new Date())
      ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
      a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
   })(
      window,
      document,
      'script',
      'https://www.google-analytics.com/analytics.js',
      'ga'
   )

   ga('create', gaID, 'auto')
   ga('send', 'pageview')
}
