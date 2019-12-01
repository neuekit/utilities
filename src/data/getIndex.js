/**
 * Finds an object index in an array of objects
 * @memberof Data
 * @param {array} arr the array of objects to search through
 * @param {string} key the property key in the object you want to find
 * @param {string} value the property value in the object you want to find
 * @returns {number} index of the object that matches the criteria, -1 otherwise
 */

export default function(arr, key, value) {
   return arr.findIndex(v => v[key] === value);
}
