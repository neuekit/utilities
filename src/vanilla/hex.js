/**
 * Creates a random 6 character hex value
 * @memberof Vanilla
 * @version 1.0.0
 * @returns {string} 6 character hex string
 */

export default function () {
   return Math.random().toString(36).substring(7)
}
