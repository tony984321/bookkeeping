import { Details, Bill } from "@/interfaces/details";
// @ts-ignore
import { sumBy, sum } from 'lodash';

export const getMonthlyBill = (details: Details[]) => {
  if(details.length === 0) {
    return { totalIncome: 0, totalExpenditure: 0, profit: 0 } as Bill
  }

  const totalAmount = (key: string) => sum(
    // @ts-ignore
    details.map((d: Details) => sumBy(d[key], 'amount'))
  );
  const totalIncome = totalAmount("income");
  const totalExpenditure = totalAmount("expenditure");
  const profit = totalIncome - totalExpenditure;

  return { totalIncome, totalExpenditure, profit } as Bill
};
