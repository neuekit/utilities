/**
 * Returns a clamped value between two points
 * @memberof vanilla
 * @version 1.0.0
 * @param {number} start bottom end of the range
 * @param {number} end top end of the range
 * @param {number} duration length of range
 * @param {number} multiplier changing value to move between start and end
 * @param {number} decimal return result to a float
 * @returns {number} Returns the value between start & end
 */

export default function (start, end, duration, multiplier, decimal) {
   // Return early if calc is not needed
   if (multiplier > duration) return end
   // Works out what 1% of the clamp range is
   let onePercent = (start - end) / 100
   // Steps through the duration based on the passed multiplier (ie. scrollY)
   let multiCalc = multiplier / (duration / 100)
   // Deducts the multiplied range by the duration step from  the start value
   let total = start - onePercent * multiCalc
   // Returns rounded final number to a set decimal place (2 by default)
   return Number(total.toFixed(decimal || 0))
}
