/**
 * Finds an object in an array of objects
 * @memberof Vanilla
 * @version 1.0.0
 * @param {array} arr the array of objects to search through
 * @param {string} key the property key in the object you want to find
 * @param {string} value the property value in the object you want to find
 * @returns {number} the object that matches the criteria, undefined otherwise
 */

export default function(arr, key, value) {
   return arr.find(v => v[key] === value);
}
