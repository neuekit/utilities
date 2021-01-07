/**
 * Adds leading zeros to your number
 * @memberof Vanilla
 * @version 1.0.0
 * @param {number} number The number to prefix with zeros
 * @param {number} zeros The number of zeros to lead by
 * @returns {string} 6 character hex string
 */

export default function (number, zeros = 0) {
   return `${number + parseInt('1'.padEnd(2 + zeros, '0'))}`.substring(1)
}
