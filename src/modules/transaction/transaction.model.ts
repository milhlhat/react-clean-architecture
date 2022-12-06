export interface Transaction {
    id: string;
    amount: number;
    date: Date;
    description: string;
    type: TransactionType;
}

export enum TransactionType {
    Expense = 'expense',
    Income = 'income',
}