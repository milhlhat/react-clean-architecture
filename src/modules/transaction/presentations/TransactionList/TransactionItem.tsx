
import { useDeleteTransactionAdapter } from "modules/transaction/adapters";
import { Transaction, TransactionType } from "modules/transaction/domains/transaction.entity";
import transactionService from "modules/transaction/domains/transaction.model";

type Props = {
    transaction: Transaction;
    loadTransactions: () => void;
}

const TransactionItem = (props: Props) => {
    const { transaction: { amount, date, description, id, type }, loadTransactions } = props

    const { deleteTransactionAdapter } = useDeleteTransactionAdapter(transactionService);

    const deleteTransaction = (id: string) => {
        deleteTransactionAdapter(id);
        loadTransactions(); // update STATE list
    }

    return (
        <div className="transaction-item">
            <div>
                <div>
                    <span className="transaction-item__description">
                        {description}
                    </span>

                    <span className="transaction-item__date">
                        {date.toString()}
                    </span>

                </div>
                <div className="transaction-item__amount">
                    {type === TransactionType.Income ? <span className='income'>+{amount}</span> : <span className='expense'>-{amount}</span>}
                </div>

            </div>
            <button className="danger-btn transaction-item__delete" onClick={() => deleteTransaction(id)}>Xóa</button>
        </div>
    )
}

export default TransactionItem