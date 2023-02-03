/**
 * @memberof Vite
 * @version 1.0.0
 * This plugin will reload the page when a file is changed.
 * This is useful for files that are not imported by the app.
 * For example, if you have a file that is used by a serverless function.
 *
 * @param {Array<String>} files - The file to watch for changes. Can be a string or an array of strings.
 * @returns The plugin.
 *
 * @example
 * // vite.config.js
 * import { reloadForFiles } from '@neuekit/utils'
 *
 * export default {
 *   plugins: [
 *     reloadForFiles('src/functions/my-function.js')
 *   ]
 * }
 *
 * @example
 * // vite.config.js
 * import { reloadForFiles } from '@neuekit/utils'
 *
 * export default {
 *   plugins: [
 *     reloadForFiles(['.ts', '.js'])
 *   ]
 * }
 */
export default files => {
   return {
      name: 'reload-for-files',
      enforce: 'post',

      handleHotUpdate({ file, server }) {
         if ([...files].some(name => file.endsWith(name))) {
            server.ws.send({ type: 'full-reload' })
         }
      }
   }
}
