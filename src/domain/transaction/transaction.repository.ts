import { Transaction } from "./transaction.model";

export abstract class TransactionRepository {
    abstract getTransactions(): Transaction[];
    abstract getTransactionById(id: string): Transaction;
    abstract createTransaction(transaction: Transaction): Transaction;
    abstract validateTransaction(transaction: Transaction): boolean;
    abstract updateTransaction(transaction: Transaction): Transaction;
    abstract deleteTransaction(id: string): void;
}