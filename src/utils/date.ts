import Vue from 'vue';
import format from 'date-fns/format';
import { parseISO } from 'date-fns';

Vue.filter('date-format',function(date: string | Date, formatStr='YYYY-MM-DD') {
  return format(typeof date === 'string' ? parseISO(date) : date, formatStr)
});
