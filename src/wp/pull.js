import query from 'qss';

/**
 * Handy sapper fetch wrapper
 * @memberof WordPress
 * @version 1.0.0
 * @param {string} endpoint api url
 * @param {object} [params={}] object to convert to query string
 * @param {boolean} [preload=false] instruction to use sappers preload fetch
 * @param {function} callback a callback function to be run post fetch
 * @returns {object} fetch data in json format
 */

export default async function(
   endpoint,
   params = {},
   preload = false,
   callback
) {
   const args = Object.keys(params).length ? '?' + query.encode(params) : '';
   const url = _endpoint + args;

   const req = await (preload ? preload.fetch(url) : fetch(url));

   callback && callback(req);

   const res = await req.json();

   return res;
}
