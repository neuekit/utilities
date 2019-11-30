import dayjs from './dayjs';

export default function(time, format = 'DD MMMM YYYY') {
   dayjs.extend(advancedFormat);

   return dayjs(time).format(format);
}
