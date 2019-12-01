/**
 * Takes a string and converts it to Title case
 * @memberof Transforms
 * @version 1.0.0
 * @param {string} str string to convert
 * @returns {string} converted string
 */

export default function(str) {
   str = str.replace(/(^\w{1}|\.\s*\w{1})/gi, toReplace => {
      return toReplace.toUpperCase();
   });

   return str;
}
