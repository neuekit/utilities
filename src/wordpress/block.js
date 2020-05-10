/**
 * Returns a component name based on a lazyblock slug
 * @memberof WordPress
 * @version 1.1.0
 * @param {object} block the block object
 * @returns {string} the component name for use in <svelte:component>
 */

export default function (block) {
   block = (block || '')
      .split('/')[1]
      .toLowerCase()
      .replace(/(\b|-)\w/g, (m) => m.toUpperCase().replace(/-/, ''));

   return block;
}
