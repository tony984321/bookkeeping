export interface Details {
  id: number;
  createdAt: string;
  income: Detail[];
  expenditure: Detail[];
}

export interface Detail {
  id: number;
  amount: number;
  categoryId: number;
}

export interface Bill {
  totalIncome: number;
  totalExpenditure: number;
  profit: number;
}
