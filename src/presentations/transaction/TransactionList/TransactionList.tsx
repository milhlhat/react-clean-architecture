import autoAnimate from '@formkit/auto-animate';
import transactionService from 'domain/transaction/transaction.entity';
import { Transaction } from 'domain/transaction/transaction.model';
import { useEffect, useRef, useState } from 'react';
import TransactionCreate from '../TransactionCreate/TransactionCreate';
import "./style.css";
import TransactionItem from './TransactionItem';


const TransactionList = () => {
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([]);
  const parent = useRef(null)
  const loadTransactions = () => {
    const transactions = transactionService.getTransactions().reverse();
    if (transactions) {
      setAllTransactions(transactions);
    } else {
      setAllTransactions([]);
    }
  }

  useEffect(() => {
    loadTransactions();
  }, []);
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
  return (
    <div  className='transaction-container'>
      <TransactionCreate loadTransactions={loadTransactions}/>
      <div ref={parent} className="transaction-list">
      {allTransactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} loadTransactions={loadTransactions}/>
      ))}
      </div>
    </div>
  )
}

export default TransactionList