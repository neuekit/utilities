const months = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December'
]

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const suffs = ['th', 'st', 'nd', 'rd']

const pad = s => String(s).padStart(2, '0')
const ordinal = n => n + (suffs[((n % 100) - 20) % 10] || suffs[n % 100] || suffs[0])

const formats = {
   YY: d => String(d.getFullYear()).slice(-2),
   YYYY: d => d.getFullYear(),

   M: d => d.getMonth(),
   MM: d => pad(d.getMonth()),
   MMM: d => months[d.getMonth()].slice(0, 3),
   MMMM: d => months[d.getMonth()],

   D: d => d.getDate(),
   DD: d => pad(d.getDate()),
   d: d => d.getDay(),
   dd: d => days[d.getDay()].slice(0, 1),
   ddd: d => days[d.getDay()].slice(0, 3),
   dddd: d => days[d.getDay()],
   Do: d => ordinal(d.getDate()),

   H: d => d.getHours(),
   HH: d => pad(d.getHours()),
   h: d => d.getHours() % 12 || 12,
   hh: d => pad(d.getHours() % 12 || 12),

   m: d => d.getMinutes(),
   mm: d => pad(d.getMinutes()),

   s: d => d.getSeconds(),
   ss: d => pad(d.getSeconds()),

   SSS: d => d.getMilliseconds(),

   A: d => (d.getHours() >= 12 ? 'PM' : 'AM'),
   a: d => (d.getHours() >= 12 ? 'pm' : 'am')
}

/**
 * Creates a nice formatted date from a unix timestamp
 * @memberof Vanilla
 * @version 2.0.0
 * @param {string} string containing formats ie. {YYYY}
 * @param {object|string} date object or string
 * @returns {string} 6 character hex string
 */

export default function (str, date) {
   date = date ? (typeof date === 'string' ? new Date(date) : date) : new Date()
   str = str.replace(/[^{\}]+(?=})/g, f => {
      if (!formats[f]) throw `{${f}} is an invalid format`
      return formats[f](date)
   })

   return str.replace(/{|}/g, '')
}
