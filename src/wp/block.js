/**
 * Returns a component name based on a lazyblock slug
 * @memberof WordPress
 * @version 1.0.0
 * @param {object} block the block object
 * @returns {string} the component name for use in <svelte:component>
 */

export default function(block) {
   block = (block || '')
      .replace('lazyblock/', '')
      .replace('core/', '')
      .toLowerCase()
      .replace(/(\b|-)\w/g, m => m.toUpperCase().replace(/-/, ''));

   return block;
}
