 
import { TransactionList } from 'modules/transaction/presentations/TransactionList';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div> 
      <ToastContainer />
      <TransactionList/>
    </div>
  );
}

export default App;
