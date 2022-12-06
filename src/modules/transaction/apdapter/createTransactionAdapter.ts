import { abortError, notifyError } from 'utils/exceptionUtil';
import { toastSuccess } from 'utils/toastUtil';
import { v4 as uuid } from 'uuid';
import transactionService from "../transaction.entity";
import { Transaction, TransactionType } from "../transaction.model";
import { isSpendMoreThanIncome, spendMoreThanIncomeUseCase } from "../use-case/spendMoreThanIncomeUseCase";

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

export const createTransactionAdapter = (event: React.ChangeEvent<HTMLFormElement>): boolean => {
    try {
        // transform data from third party library or framework (e.g. form, etc.) to domain model
        const transaction = convertFormToTransaction(event);
        const allTransactions = transactionService.getTransactions();
        // execute use case or service
        // transform data from domain model to third party library framework or UI (e.g. form, component etc.)
        // interact with UI, e.g. show error message, show success message, etc. (not related to state management)

        if (transaction.type === TransactionType.Expense && isSpendMoreThanIncome(allTransactions)) {
            spendMoreThanIncomeUseCase(transaction);
        } else {
            transactionService.createTransaction(transaction);
        }

        toastSuccess("Thêm thành công");
        return true
    } catch (error) {
        notifyError(error);
        throw abortError(error);
    }
}
