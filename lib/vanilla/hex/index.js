/**
 * Creates a unique id
 * @memberof Vanilla
 * @version 2.0.0
 * @param {number} length of id to create
 * @returns {string} unique id as an alphanumeric string
 */

const char = '0123456789abcdefghijklmnopqrstuvwxyz'

export default function (len = 6) {
   let id = ''

   while (len--) {
      id += char[(Math.random() * 36) | 0]
   }

   return id
}
