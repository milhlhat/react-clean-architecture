import transactionService from "domain/transaction/transaction.entity";
import { Transaction } from "domain/transaction/transaction.model";

export const getTransactionsUseCase = (): Transaction[] => {
    const allTransaction = transactionService.getTransactions();
    return allTransaction;
}

