export default function(str) {
   str = str.replace(/(^\w{1}|\.\s*\w{1})/gi, toReplace => {
      return toReplace.toUpperCase();
   });

   return str;
}
