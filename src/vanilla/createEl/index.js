/**
 * Creates an element with a given object of attributes
 * @memberof Vanilla
 * @version 1.0.0
 * @param {string} name of the element such as 'div'
 * @param {object} key/value object of attribute names and values
 * @returns {node} returns node
 */

export default function (tagName, attributes = {}) {
   const elem = document.createElement(tagName)

   for (const key in attributes) {
      elem.setAttribute(key, attributes[key])
   }

   return elem
}
