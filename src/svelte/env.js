import 'dotenv/config'

/**
 * Svelte/Sapper automatic environment variable array
 * @memberof Svelte
 * @version 1.0.0
 * @param {string} prefix
 * @returns {object} environment variables for replacement
 */

export default function (prefix = 'SS_') {
   const obj = {}

   for (let item in process.env) {
      if (item.startsWith(prefix)) {
         obj[item] = String(process.env[item])
      }
   }

   return obj
}
