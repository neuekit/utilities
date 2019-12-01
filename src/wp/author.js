/**
 * Shortcut to the author object
 * @memberof WordPress
 * @version 1.0.0
 * @param {object} data the post object
 * @returns {object} the author of the post
 */

export default function(data) {
   if (data['author']) {
      return data['author'][0];
   }
}
