/**
 * Overscroll detection and callback firing
 * @memberof Vanilla
 * @version 1.0.0
 * @param {function} callback
 * @returns {function} Fires callback
 */

export default function (callback) {
   let maxHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
   )

   let scrollHeight = maxHeight - document.documentElement.clientHeight

   window.addEventListener('scroll', () => {
      // console.log(window.scrollY, scrollHeight)
      if (window.scrollY > scrollHeight || window.scrollY < 0) {
         callback()
      }
   })
}
