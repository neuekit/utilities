/**
 * @private
 */
const observer =
   typeof window !== 'undefined' &&
   /* @__PURE__ */ new IntersectionObserver(
      items => {
         for (let item of items) {
            if (item.isIntersecting) {
               const img = new Image()
               img.onload = async () => {
                  await (item.target.src = img.src)
                  await item.target.classList.add('is-ready')
               }
               img.src = item.target.dataset.src
               observer.unobserve(item.target)
            }
         }
      },
      { rootMargin: '200px 0px' }
   )

/**
 * Constructs an IntersectionObserver based, image lazy load function
 * @memberof Vanilla
 * @version 1.0.0
 * @param {object} node the element to be observed/lazy loaded
 * @returns {object} containing methods, update and destroy
 */
export default function (node) {
   if (typeof window === 'undefined') return

   observer.observe(node)
   return {
      update() {
         observer.unobserve(node)
         node.classList.remove('is-ready')
         setTimeout(() => observer.observe(node), 200)
      },
      destroy() {
         observer.unobserve(node)
      }
   }
}
