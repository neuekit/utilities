/**
 * Throttles a given function to run once every X milliseconds
 * @memberof Vanilla
 * @version 1.0.0
 * @returns {function} Returns a passed function declaration
 */

export default function (fn, delay) {
   let run = false
   return function (...args) {
      if (!run) {
         fn(...args)
         run = true
         setTimeout(() => run = false, delay)
      }
   }
}
