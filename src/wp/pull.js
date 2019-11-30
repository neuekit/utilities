import query from 'qss';

export default async function(endpoint, params = {}, preload = null) {
   const args = Object.keys(params).length ? '?' + query.encode(params) : '';
   const url = _host + (endpoint !== '' ? _api + endpoint : '') + args;

   const req = await (preload ? preload.fetch(url) : fetch(url));
   const res = await req.json();

   return res;
}
