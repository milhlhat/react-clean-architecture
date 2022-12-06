import { v4 as uuid } from 'uuid';
import { notifyError } from "utils/exceptionUtil";
import { toastSuccess } from "utils/toastUtil";  
import { Transaction } from 'domain/transaction/transaction.model';
import transactionService from 'domain/transaction/transaction.entity';

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

export const createTransactionUseCase = (event: React.ChangeEvent<HTMLFormElement>): Transaction => {
    try {
        const transaction = convertFormToTransaction(event);
        const transactionCreated = transactionService.createTransaction(transaction);
        if (transactionCreated) {
            toastSuccess("Thêm thành công");
            return transactionCreated;
        } else {
            throw new Error("Thêm thất bại");
        }
    } catch (error) {
        notifyError(error);
        throw error;
    }
}