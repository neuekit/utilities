export default function(block) {
   block = (block || '')
      .replace('lazyblock/', '')
      .replace('core/', '')
      .toLowerCase()
      .replace(/(\b|-)\w/g, m => m.toUpperCase().replace(/-/, ''));

   return block;
}
