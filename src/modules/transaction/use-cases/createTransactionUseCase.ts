import { Transaction, TransactionType } from "../domains/transaction.entity";
import { TransactionRepository } from "../domains/transaction.repository";

export default class CreateTransactionUseCase {
    private transactionRepo: TransactionRepository;
    constructor(_transactionRepo: TransactionRepository) {
        this.transactionRepo = _transactionRepo;
    }

    execute(transaction: Transaction): Transaction {
        if (transaction.type === TransactionType.Expense && transaction.amount > 50000 && !transaction.description) {
            throw new Error("Chi tiêu lớn hơn 50.000 phải có mô tả");
        }
        return this.transactionRepo.createTransaction(transaction);
    }
}