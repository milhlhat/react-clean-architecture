import { Transaction } from "./transaction.entity";

/**BUSINESS REPO => BUSINESS RULE */
export interface TransactionRepository {
    getTransactions(): Transaction[];
    getTransactionById(id: string): Transaction;
    createTransaction(transaction: Transaction): Transaction;
    validateTransaction(transaction: Transaction): boolean;
    updateTransaction(transaction: Transaction): Transaction;
    deleteTransaction(id: string): void;
}