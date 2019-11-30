export default function(data) {
   if (data['author']) {
      return data['author'][0];
   }
}
