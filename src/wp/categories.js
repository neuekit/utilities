/**
 * Shortcut to wp:term
 * @memberof WordPress
 * @param {object} data the post/page object
 * @returns {object} term object
 */

export default function(data) {
   if (data._embedded && data._embedded['wp:term']) {
      return data._embedded['wp:term'][0];
   }
}
