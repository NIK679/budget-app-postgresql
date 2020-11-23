import React from 'react';
import { AmountRow } from './components/AmountRow';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <AmountRow />
        <AddTransaction />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
