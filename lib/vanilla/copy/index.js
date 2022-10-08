import createEl from '../createEl/index.js'

/**
 * Copies text to the users' clipboard
 * @memberof Vanilla
 * @version 1.0.0
 * @param {string} text the string to be copied
 * @deprecated use navigator.clipboard.writeText instead
 */

export default function (text) {
   console.warn('copy is deprecated, use navigator.clipboard.writeText instead')
   let textArea = createEl('textArea', { type: 'hidden', value: text })

   document.body.appendChild(textArea)
   textArea.focus()
   textArea.select()

   try {
      let successful = document.execCommand('copy')
      return successful
   } catch (err) {
      console.error('Unable to copy:', err)
   }

   document.body.removeChild(textArea)
}
