export default function(str) {
   return str.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec);
   });
}
