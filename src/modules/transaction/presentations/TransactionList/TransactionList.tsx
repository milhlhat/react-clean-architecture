import autoAnimate from '@formkit/auto-animate';
import useGetTransactionAdapter from 'modules/transaction/adapters/useGetAllTransactionAdapter';
import transactionService from 'modules/transaction/domains/transaction.model';
import { useEffect, useRef } from 'react';
import TransactionCreate from '../TransactionCreate/TransactionCreate';
import "./style.css";
import TransactionItem from './TransactionItem';


const TransactionList = () => {
  const parent = useRef(null)
  const { allTransactions, loadTransactions } = useGetTransactionAdapter(transactionService);

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <div className='transaction-container'>
      <TransactionCreate loadTransactions={loadTransactions} />
      <div ref={parent} className="transaction-list">
        {allTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} loadTransactions={loadTransactions} />
        ))}
      </div>
    </div>
  )
}

export default TransactionList