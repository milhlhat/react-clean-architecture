import { abortError, notifyError } from "utils/exceptionUtil";
import { toastSuccess } from "utils/toastUtil";
import transactionService from "../transaction.entity";

export const deleteTransactionAdapter = (id: string): void => {
    try {
        transactionService.deleteTransaction(id);
        toastSuccess("Xóa thành công");
    } catch (error) {
        notifyError(error);
        throw abortError(error);
    }   
}