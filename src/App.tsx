import { ToastContainer, toast } from 'react-toastify';
import TransactionList from './features/transaction/presentations/TransactionList/TransactionList';

function App() {
 
  return (
    <div> 
      <ToastContainer />
      <TransactionList/>
    </div>
  );
}

export default App;
