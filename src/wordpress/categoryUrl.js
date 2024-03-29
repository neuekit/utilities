/**
 * Gets relative pathname for taxonomy url
 * @memberof WordPress
 * @version 1.0.0
 * @param {object} data the post/page object
 * @param {string} url the site domain name, including protocol
 * @returns {string} the relative category url
 */

export default function (data, url) {
   if (data) {
      return data.link.replace(url, '');
   }
}
