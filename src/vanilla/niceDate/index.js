import dayjs from '../../integrations/dayjs'

/**
 * Creates a nice formatted date from a unix timestamp
 * @memberof Vanilla
 * @version 1.0.1
 * @param {number} time unix timestamp
 * @param {string} [format='DD MMMM YYYY'] dayjs format
 * @returns {string} 6 character hex string
 */

export default function (time, format = 'DD MMMM YYYY') {
   return dayjs(time).format(format)
}
