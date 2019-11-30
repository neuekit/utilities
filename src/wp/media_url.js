export default function(data, size = 'full') {
   if ( data._embedded && data._embedded['wp:featuredmedia'] && !data._embedded['wp:featuredmedia'][0].code )
      return data._embedded['wp:featuredmedia'][0].media_details.sizes[size]
         .source_url;
   }

   else {
      return false;
   }
}
