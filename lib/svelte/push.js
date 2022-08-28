import { query } from '../vanilla/index.js'

/**
 * Handy sveltekit fetch wrapper for post requests
 * @memberof Svelte
 * @version 1.0.0
 * @param {string} endpoint api url
 * @param {object} [body={}] object to convert to post body
 * @param {object} [params={}] object to convert to query string
 * @param {boolean} [preload=false] instruction to use sappers preload fetch
 * @param {boolean} api toggle to opt out of the prepended API_URL env var
 * @returns {object} fetch data in json format
 */

export default async function (endpoint, body = {}, params = {}, preload = false, api = true) {
   const opts = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
      }
   }

   const base = (api && process.env.API_URL) || ''
   const url = base + endpoint + query(params, '?')
   const req = await (preload ? preload.fetch(url, opts) : fetch(url, opts))
   const res = await req.json()

   return res
}
