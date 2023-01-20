import { useCallback } from 'react';
import { abortError, notifyError } from 'utils/exceptionUtil';
import { toastSuccess } from 'utils/toastUtil';
import { v4 as uuid } from 'uuid';
import { Transaction } from "../domains/transaction.entity";
import { TransactionRepository } from '../domains/transaction.repository';
import CreateTransactionUseCase from '../use-cases/createTransactionUseCase';

export const useCreateTransactionAdapter = (transactionService: TransactionRepository) => {

    const convertFormToTransaction = (event: React.ChangeEvent<HTMLFormElement>): Transaction => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const transactionForm: Transaction = Object.fromEntries(formData.entries()) as unknown as Transaction;
        return {
            id: uuid(),
            amount: Number(transactionForm.amount),
            date: transactionForm.date,
            description: transactionForm.description,
            type: transactionForm.type,
        };
    }

    const createTransactionAdapter = useCallback((event: React.ChangeEvent<HTMLFormElement>): boolean => {
        try {
            // transform data from third party library or framework (e.g. form, etc.) to domain model
            const transaction = convertFormToTransaction(event);
            const allTransactions = transactionService.getTransactions();
            // execute use case or service
            // transform data from domain model to third party library framework or UI (e.g. form, component etc.)
            // interact with UI, e.g. show error message, show success message, etc. (not related to state management)

            const createTransactionUseCase = new CreateTransactionUseCase(transactionService);
            createTransactionUseCase.execute(transaction);
            toastSuccess("Thêm thành công");
            return true
        } catch (error) {
            notifyError(error);
            throw abortError(error);
        }

    }, [])
    return { createTransactionAdapter }
}