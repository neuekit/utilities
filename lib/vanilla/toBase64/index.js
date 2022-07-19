/**
 * Converts a file to base64
 * @memberof Vanilla
 * @version 1.0.0
 * @param {blob} file file blob
 * @returns {string} base64 string
 */

export default function (file) {
   return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
   })
}
