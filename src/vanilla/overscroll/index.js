/**
 * Overscroll detection and callback firing
 * @memberof Vanilla
 * @version 1.0.0
 * @param {function} callback
 * @returns {function} Fires callback
 */

export default function (callback, edge = 'bottom') {
   let maxHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
   )

   let scrollHeight = maxHeight - document.documentElement.clientHeight
   let timer

   function run() {
      clearTimeout(timer)
      timer = setTimeout(callback, 300)
   }

   window.addEventListener('wheel', e => {
      if (edge === 'bottom' && window.scrollY == scrollHeight) run()
      if (edge === 'top' && window.scrollY < 1) run()
   })
}
