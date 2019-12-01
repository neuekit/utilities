/**
 * Decodes a numeric html entity such as &#74;
 * @memberof Transforms
 * @param {string} str the string to be decoded
 * @returns {string} plain text string
 */

export default function(str) {
   return str.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec);
   });
}