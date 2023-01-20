import { TransactionRepository } from "../domains/transaction.repository";

export default class DeleteTransactionUseCase {
    private transactionRepo: TransactionRepository;
    constructor(_transactionRepo: TransactionRepository) {
        this.transactionRepo = _transactionRepo;
    }

    execute(id: string): void {
        this.transactionRepo.deleteTransaction(id);
    }
}
    