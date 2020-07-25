import { encode } from 'qss';

/**
 * Handy sapper fetch wrapper
 * @memberof Svelte
 * @version 1.2.0
 * @param {string} endpoint api url
 * @param {object} [params={}] object to convert to query string
 * @param {boolean} [preload=false] instruction to use sappers preload fetch
 * @param {boolean} api toggle to opt out of the prepended API_URL env var
 * @param {array|boolean} head include headers in return
 * @returns {object} fetch data in json format
 */

export default async function (
   endpoint,
   params = {},
   preload = false,
   api = true,
   head = false
) {
   const base = (api && process.env.API_URL) || '';
   const url = base + endpoint + encode(params, '?');
   const res = await (preload ? preload.fetch(url) : fetch(url));
   const json = await res.json();
   const headers =
      head &&
      head.reduce((o, key) => ({ ...o, [key]: res.headers.get(key) }), {});

   return head ? { headers, json } : json;
}
