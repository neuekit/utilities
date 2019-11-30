import query from 'qss';

export default async function(endpoint, params = {}, preload = null, callback) {

   const args = Object.keys(params).length ? '?' + query.encode(params) : '';
   const url = _endpoint + args;

   const req = await (preload ? preload.fetch(url) : fetch(url));

   callback && callback(req);

   const res = await req.json();

   return res;
};
