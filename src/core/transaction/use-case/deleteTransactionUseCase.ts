import transactionService from "domain/transaction/transaction.entity";
import { notifyError } from "utils/exceptionUtil";
import { toastSuccess } from "utils/toastUtil";

export const deleteTransactionUseCase = (id: string): void => {
    try {
        transactionService.deleteTransaction(id);
        toastSuccess("Xóa thành công");
    } catch (error) {
        notifyError(error);
    }
    
}