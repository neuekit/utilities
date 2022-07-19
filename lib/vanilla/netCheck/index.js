/**
 * Does a rudimentary check of download speed
 * @memberof Vanilla
 * @version 1.0.0
 * @returns {number} Filesize in bytes
 */

export default async function (size = 100000) {
   // url we will download file from with the above size
   const url = 'https://eu.httpbin.org/stream-bytes/'
   // Capture the start time in miliseconds
   const startTime = Date.now() | 0
   // Download the file
   await fetch(url + size).then(r => r.blob())
   // Capture the end time in miliseconds
   const endTime = Date.now() | 0
   // Get the difference in times to see how long the download took and convert it to seconds
   const duration = (endTime - startTime) / 1000
   // Multiply the bytes above by 8 to get the bits and divide it by the duration to get the bits per second
   const bps = ((size * 8) / duration) | 0
   // Convert the bits per second to kilobits per second
   const kbps = (bps / 1000) | 0
   // Convert the kilobits per second to megabits per second
   const mbps = (kbps / 1000).toFixed(2)
   // Return an object with both the kilobits and megabits per second
   return { kbps, mbps }
}
