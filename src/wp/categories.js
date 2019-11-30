export default function(data) {
   if (data._embedded && data._embedded['wp:term']) {
      return data._embedded['wp:term'][0];
   }
}
