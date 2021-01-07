/**
 * Takes a string and converts it to sentence case
 * @memberof Vanilla
 * @version 1.0.0
 * @param {string} str string to convert
 * @returns {string} converted string
 */

export default function (str) {
   str = str.toLowerCase()
   str = str.replace(/(\n)|(\f)/g, ' ')
   str = str.replace(/^.|(\. .)/g, char => char.toUpperCase())

   return str
}
