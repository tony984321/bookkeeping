import {Bill, Detail, FormattedDetail} from "@/interfaces/details";
import {format, getMonth, getYear} from "date-fns";
// @ts-ignore
import {groupBy, omit, sum, sumBy, sortBy} from 'lodash';

export const getMonthlyDetails = (details: Detail[], month: number, year: number) => {
  if (details.length) {
    return details.filter(
      d => getMonth(new Date(d.createdAt)) === (month - 1) &&
        getYear(new Date(d.createdAt)) === year
    ) as Detail[]
  }
  return [];
};

export const getFormattedDetails = (details: Detail[]) => {
  if(details.length) {
    const newDetails = details.map(d => (
      {...d, createdAt: new Date(format(new Date(d.createdAt), 'yyyy-MM-dd'))})
    );

    const groupDetails = groupBy(newDetails, 'createdAt');
    return sortBy(Object.keys(groupDetails).map(date => {
      return {
        date: new Date(date),
        items: groupDetails[date],
        totalIncome: sumBy(groupDetails[date].filter((d: Detail) => d.type === 'income'), 'amount'),
        totalExpenditure: sumBy(groupDetails[date].filter((d: Detail) => d.type === 'expenditure'), 'amount')
      }
    }), 'date').reverse() as FormattedDetail[]
  }
  return []
};

export const getMonthlyBill = (details: Detail[]) => {
  if(details.length === 0) {
    return { totalIncome: 0, totalExpenditure: 0, profit: 0 } as Bill
  }

  const totalAmount = (type: string) => {
    const detailsByType: Detail[] = details.filter((d: Detail) => d.type === type);
    return sumBy(detailsByType, 'amount')
  };
  const totalIncome = totalAmount("income");
  const totalExpenditure = totalAmount("expenditure");
  const profit = totalIncome - totalExpenditure;

  return { totalIncome, totalExpenditure, profit } as Bill
};
