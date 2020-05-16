export interface Profile {
  displayName?: string;
  avatar?: string | ArrayBuffer | null;
  gender?: string;
  description?: string;
}

export interface Category {
  id?: string;
  title: string;
  icon: string;
  type: CategoryType;
}

export enum CategoryType {
  INCOME = 'income',
  EXPENDITURE = 'expenditure',
}
