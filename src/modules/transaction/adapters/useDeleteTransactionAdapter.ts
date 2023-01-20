import { useCallback } from "react";
import { abortError, notifyError } from "utils/exceptionUtil";
import { toastSuccess } from "utils/toastUtil";
import { TransactionRepository } from "../domains/transaction.repository";
import DeleteTransactionUseCase from "../use-cases/deleteTransactionUseCase";


export const useDeleteTransactionAdapter = (transactionService: TransactionRepository) => {
    const deleteTransactionAdapter =useCallback((id: string): void => {
        try {
            const deleteTransactionUseCase = new DeleteTransactionUseCase(transactionService);
            deleteTransactionUseCase.execute(id);
            toastSuccess("Xóa thành công");
        } catch (error) {
            notifyError(error);
            throw abortError(error);
        }   
    }, [])
    return { deleteTransactionAdapter }
}