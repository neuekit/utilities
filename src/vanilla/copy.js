/**
 * Copies text to the users' clipboard
 * @memberof Vanilla
 * @version 1.0.0
 * @param {string} text the string to be copied
 */

export default function(text) {
   let textArea = document.createElement('textArea');

   textArea.setAttribute('type', 'hidden');
   textArea.value = text;
   document.body.appendChild(textArea);
   textArea.focus();
   textArea.select();

   try {
      let successful = document.execCommand('copy');
      let msg = successful ? 'successful' : 'unsuccessful';
   } catch (err) {
      console.error('Unable to copy:', err);
   }

   document.body.removeChild(textArea);
}
