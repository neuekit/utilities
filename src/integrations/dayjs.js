import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

/**
 * Initialises the dayjs plugin, with advancedFormat enabled
 * @memberof Integrations
 * @version 1.0.0
 * @returns {object} dayjs instance
 */

export default dayjs;
