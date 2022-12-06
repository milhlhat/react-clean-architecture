// Use case: xử lý logic nghiệp vụ của transaction có liên quan đến các entity khác nhau
import transactionService from '../transaction.entity';
import { Transaction, TransactionType } from '../transaction.model';

export const spendMoreThanIncomeUseCase = (transaction: Transaction): Transaction => {
    if (transaction.description.length < 10 && transaction.amount >= 500000) {
        throw new Error("Mô tả chi tiêu phải dài hơn 10 ký tự");
    }
    return transactionService.createTransaction(transaction);
}

export const isSpendMoreThanIncome = (transactions: Transaction[]): boolean => {
    const totalIncome = transactions.filter(transaction => transaction.type === TransactionType.Income).reduce((total, transaction) => total + transaction.amount, 0);
    const totalExpense = transactions.filter(transaction => transaction.type === TransactionType.Expense).reduce((total, transaction) => total + transaction.amount, 0);
    return totalExpense > totalIncome;
}