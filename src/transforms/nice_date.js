import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

export default function(time, format = 'DD MMMM YYYY') {
   dayjs.extend(advancedFormat);

   return dayjs(time).format(format);
}
