import dayjs from 'dayjs/esm/index.js'
import advancedFormat from 'dayjs/esm/plugin/advancedFormat/index.js'

/**
 * Initialises the dayjs plugin, with advancedFormat enabled
 * @memberof Integrations
 * @version 1.0.1
 * @returns {object} dayjs instance
 */

/**
 * Wrapped in callback function to avoid invoking when read/imported
 * e.g. export default dayjs.extend(advancedFormat); <- Is not tree shakeable
 */
export default function (...args) {
   dayjs.extend(advancedFormat)

   return dayjs(...args)
}
