export interface Detail {
  id?: string;
  createdAt: Date;
  amount: number;
  categoryId?: string;
  type: string;
}

export interface Bill {
  totalIncome: number;
  totalExpenditure: number;
  profit: number;
}

export interface FormattedDetail {
  categoryId: number;
  date: Date;
  items: Detail [];
  totalIncome: number;
  totalExpenditure: number;
}
