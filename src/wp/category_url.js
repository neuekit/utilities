export default function(data) {
   if (data) {
      return data.link.replace(_settings.url, '');
   }
}
