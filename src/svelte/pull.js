import { encode } from 'qss';

/**
 * Handy sapper fetch wrapper
 * @memberof Svelte
 * @version 1.1.2
 * @param {string} endpoint api url
 * @param {object} [params={}] object to convert to query string
 * @param {boolean} [preload=false] instruction to use sappers preload fetch
 * @param {boolean} api toggle to opt out of the prepended API_URL env var
 * @returns {object} fetch data in json format
 */

export default async function (
   endpoint,
   params = {},
   preload = false
) {
   const base = (api && process && process.env && process.env.API_URL) || '';
   const url = base + endpoint + encode(params, '?');
   const req = await (preload ? preload.fetch(url) : fetch(url));
   const res = await req.json();

   return res;
}
