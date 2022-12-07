import { useAutoAnimate } from '@formkit/auto-animate/react';
import { createTransactionAdapter } from 'modules/transaction/adapters/createTransactionAdapter';
import { TransactionType } from 'modules/transaction/transaction.model';
import React from 'react';
import { getCurrentDayString } from 'utils/dateUtil';
import "./style.css";

type Props = {
  loadTransactions: () => void;
}
function TransactionCreate(props: Props) {
  const { loadTransactions } = props;
  const [isShowCreateForm, setIsShowCreateForm] = React.useState(false);
  const [parent,] = useAutoAnimate(/* optional config */)

  const createTransaction = (event: React.ChangeEvent<HTMLFormElement>) => {
    createTransactionAdapter(event);
    loadTransactions(); // update state list
  };

  return (
    <div >
      {!isShowCreateForm ? <button className="primary-btn create-btn" onClick={() => setIsShowCreateForm(true)}>
        Thêm chi tiêu
      </button> :
        <button className="warning-btn create-btn" onClick={() => setIsShowCreateForm(false)}>
          Huỷ
        </button>
      }
      <div ref={parent as any}>
        {isShowCreateForm && <form onSubmit={createTransaction} >
          <div className="create-form">
            <input type="text" name='description' placeholder="Nhập tên giao dịch" required />
            <input type="number" name='amount' placeholder="Nhập số tiền" required step={1000} />

            <input type="date" name='date' placeholder="Nhập ngày" defaultValue={getCurrentDayString()} required />
            <select name="type" required defaultValue={TransactionType.Expense}>
              <option value={TransactionType.Expense}>Chi tiêu</option>
              <option value={TransactionType.Income}>Thu nhập</option>
            </select>
          </div>

          <button className="primary-btn done" type='submit'>Xong</button>
        </form>}
      </div>
    </div>
  )
}

export default TransactionCreate