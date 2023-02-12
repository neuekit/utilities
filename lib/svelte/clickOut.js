/**
 * Action to click outside
 * @memberof Svelte
 * @version 1.0.0
 * @param {object} node The node to listen to
 * @param {array} params Callback and elements to exclude from the click
 * @returns {function} The passed in callback
 * @example <div use:clickOut={[() => console.log('clickOut), document.querySelector('.exclude')]]}>
 */

export default (node, [callback, ...exclude]) => {
   function handler({ target }) {
      if (!node.contains(target) && !exclude.some(item => item.contains(target))) {
         callback()
      }
   }

   document.addEventListener('click', handler, { capture: true, passive: true })

   return {
      destroy() {
         document.removeEventListener('click', handler)
      }
   }
}
