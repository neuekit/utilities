import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

/**
 * Initialises the dayjs plugin, with advancedFormat enabled
 * @memberof Transforms
 * @returns {object} dayjs instance
 */

export default dayjs;
