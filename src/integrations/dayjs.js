import dayjs from 'dayjs/esm';
import advancedFormat from 'dayjs/esm/plugin/advancedFormat';

/**
 * Initialises the dayjs plugin, with advancedFormat enabled
 * @memberof Integrations
 * @version 1.0.0
 * @returns {object} dayjs instance
 */

/**
 * Wrapped in callback function to avoid invoking when read/imported
 * e.g. export default dayjs.extend(advancedFormat); <- Is not tree shakeable
 */
export default () => dayjs.extend(advancedFormat);
