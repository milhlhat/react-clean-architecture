import { abortError } from "utils/exceptionUtil";
import { TRANSACTION_KEY } from "../../helper";
import { Transaction } from "./transaction.model";
import { TransactionRepository } from "./transaction.repository";

class TransactionService implements TransactionRepository {

    getTransactions(): Transaction[] {
        const allTransaction = localStorage.getItem(TRANSACTION_KEY);
        return allTransaction ? JSON.parse(allTransaction) : [];
    }

    getTransactionById(id: string): Transaction {
        const allTransactions = this.getTransactions();
        if (!allTransactions || (Array.isArray(allTransactions) && allTransactions.length === 0)) {
            throw new Error("No transactions found");
        }

        const transaction = allTransactions.find((transaction: Transaction) => transaction.id === id);
        if (!transaction) {
            throw new Error("Transaction not found");
        }
        return transaction;
    }

    createTransaction(transaction: Transaction): Transaction {
        try {
            this.validateTransaction(transaction);
            const allTransactions = this.getTransactions();
            allTransactions.push(transaction);
            localStorage.setItem(TRANSACTION_KEY, JSON.stringify(allTransactions));
            return transaction;
        } catch (error: unknown) {
            throw abortError("Create transaction: Unknown error");
        }
    }

    validateTransaction(transaction: Transaction): boolean {
        if (!transaction) {
            throw new Error("Transaction is required");
        }
        if (!transaction.id) {
            throw new Error("Transaction id is required");
        }
        if (!transaction.amount) {
            throw new Error("Transaction amount is required");
        }
        if (!transaction.type) {
            throw new Error("Transaction type is required");
        }
        if (!transaction.date) {
            throw new Error("Transaction date is required");
        }
        if (typeof transaction.amount !== "number" || transaction.amount <= 0) {
            throw new Error("Transaction amount must be a number greater than 0");
        }
        return true;
    }

    updateTransaction(transaction: Transaction): Transaction {
        const allTransactions = this.getTransactions();
        const index = allTransactions.findIndex((t: Transaction) => t.id === transaction.id);
        if (index === -1) {
            throw new Error("Transaction not found");
        }
        allTransactions[index] = transaction;
        localStorage.setItem(TRANSACTION_KEY, JSON.stringify(allTransactions));
        return transaction;
    }

    deleteTransaction(id: string): void {
        const allTransactions = this.getTransactions();
        const index = allTransactions.findIndex((t: Transaction) => t.id === id);
        if (index === -1) {
            throw new Error("Transaction not found");
        }
        allTransactions.splice(index, 1);
        localStorage.setItem(TRANSACTION_KEY, JSON.stringify(allTransactions));
    }
}

const transactionService = new TransactionService();
export default transactionService;