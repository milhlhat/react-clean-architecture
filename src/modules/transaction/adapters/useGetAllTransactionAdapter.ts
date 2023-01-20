import { useCallback, useEffect, useState } from "react";
import { Transaction } from "../domains/transaction.entity";
import { TransactionRepository } from "../domains/transaction.repository";

export default function useGetTransactionAdapter(transactionRepo: TransactionRepository) {
    const [allTransactions, setAllTransactions] = useState<Transaction[]>([]);

    const loadTransactions = useCallback(() => {
        const transactions = transactionRepo.getTransactions().reverse();
        if (transactions) {
            setAllTransactions(transactions);
        } else {
            setAllTransactions([]);
        }
    }, []);

    useEffect(() => {
        loadTransactions();
    }, [loadTransactions]);

    return { allTransactions, loadTransactions }
}