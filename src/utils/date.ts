import Vue from 'vue';
import format from 'date-fns/format';
import { parseISO, differenceInDays, addDays } from 'date-fns';

Vue.filter('date-format',function(date: string | Date, formatStr='YYYY-MM-DD') {
  return format(typeof date === 'string' ? parseISO(date) : date, formatStr)
});

export const getDiffDates = (start: Date, end: Date) => {
  const diff = Math.abs(differenceInDays(start, end)) + 1;
  const array = Array.from(Array(diff).keys());

  return array.reduce((acc, val) => {
    // @ts-ignore
    acc.push(addDays(start, val));
    return acc;
  }, [])
}
