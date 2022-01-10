/**
 * Returns a tristate value.
 * @memberof vanilla
 * @version 1.0.0
 * @returns {boolean|undefined} Returns 1, 0 or -1
 */

export default function (val) {
   if (val === undefined) return 0
   if (val === false) return -1
   if (val === true) return 1
}