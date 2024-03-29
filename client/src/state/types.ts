export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  _id: string;
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  _id: string;
  id: string;
  __v: number;

  totalRevenue: number;
  totalExpenses: number;
  totalProfit: number;

  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;

  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
  _id: string;
  id: string;
  __v: number;

  price: number;
  expense: number;
  transactions: Array<string>;

  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionsResponse {
  _id: string;
  id: string;
  __v: number;

  buyer: number;
  amount: number;
  productIds: Array<string>;

  createdAt: string;
  updatedAt: string;
}
