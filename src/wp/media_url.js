export default function(data, size = 'full') {
   if (data._embedded && data._embedded['wp:featuredmedia']) {
      return data._embedded['wp:featuredmedia'][0].media_details.sizes[size]
         .source_url;
   }
}
