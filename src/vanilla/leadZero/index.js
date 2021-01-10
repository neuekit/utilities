/**
 * Adds leading zeros to your number
 * @memberof Vanilla
 * @version 2.0.0
 * @param {number} number The number to prefix with zeros
 * @param {number} zeros The number of zeros to lead by
 * @returns {string} number entered preceded by the number of zeroes
 */

export default function (number, zeros = 0) {
   return String(number).padStart(zeros, '0');
}
