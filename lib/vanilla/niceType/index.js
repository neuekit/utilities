/**
 * Takes a string and converts it to sentence or title case
 * @memberof Vanilla
 * @version 2.0.0
 * @param {string} string string to convert
 * @param {boolean} format enable title case
 * @returns {string} converted string
 */

export default function (string, format) {
   format = format ? /(\b[a-z](?!\s))/g : /^.|(\. .)/g
   string = string.toLowerCase()
   string = string.replace(/(\n)|(\f)/g, ' ')
   string = string.replace(format, char => char.toUpperCase())

   return string
}
