import niceDate from '../niceDate/index.js'

/**
 * Creates a nice string that shows the time since the passed in date
 * @memberof Vanllia
 * @version 1.0.0
 * @returns {string} formatted time/date string Yesterday at 10:20
 */

export default function (dateParam) {
   if (!dateParam) {
      return null
   }

   const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam)
   const DAY_IN_MS = 86400000 // 24 * 60 * 60 * 1000
   const today = new Date()
   const yesterday = new Date(today - DAY_IN_MS)
   const seconds = Math.round((today - date) / 1000)
   const minutes = Math.round(seconds / 60)
   const isToday = today.toDateString() === date.toDateString()
   const isYesterday = yesterday.toDateString() === date.toDateString()

   if (seconds < 5) return 'now'
   else if (seconds < 60) return `${seconds} seconds ago`
   else if (seconds < 90) return 'about a minute ago'
   else if (minutes < 60) return `${minutes} minutes ago`
   else if (isToday) return niceDate('Today at {hh}:{mm}', date) // Today at 10:20
   else if (isYesterday) return niceDate('Yesterday at {hh}:{mm}', date) // Yesterday at 10:20

   return false
}
