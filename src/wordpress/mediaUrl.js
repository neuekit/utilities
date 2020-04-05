/**
 * Shortcut to wp:featuredmedia
 * @memberof WordPress
 * @version 1.0.0
 * @param {object} data the post/page object
 * @param {string} [size='full'] the wp image size
 * @returns {string} featured image url
 */

export default function (data, size = 'full') {
   if (
      data._embedded &&
      data._embedded['wp:featuredmedia'] &&
      !data._embedded['wp:featuredmedia'][0].code
   ) {
      return data._embedded['wp:featuredmedia'][0].media_details.sizes[size]
         .source_url;
   } else {
      return false;
   }
}
