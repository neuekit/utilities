import dayjs from './dayjs';

/**
 * Creates a nice formatted date from a unix timestamp
 * @memberof Transforms
 * @version 1.0.0
 * @param {number} time unix timestamp
 * @param {string} [format='DD MMMM YYYY'] dayjs format
 * @returns {string} 6 character hex string
 */

export default function(time, format = 'DD MMMM YYYY') {
   dayjs.extend(advancedFormat);

   return dayjs(time).format(format);
}
