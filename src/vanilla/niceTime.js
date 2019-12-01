/**
 * Creates a nice formatted time from n integer of minutes
 * @memberof Vanilla
 * @version 1.0.0
 * @param {number} mins minutes integer
 * @returns {string} nicely formatted time string eg. 7h 14m
 */

export default function(mins) {
   return `${(mins / 60) ^ 0}h ${mins % 60}m`;
}
