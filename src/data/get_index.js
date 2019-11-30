export default function(arr, key, value) {
   return arr.findIndex(v => v[key] === value);
}
