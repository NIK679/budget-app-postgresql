import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AmountRow = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter(transaction => transaction.type === 'income')
    .map(transaction => transaction.amt)
    .reduce((acc, amt) => (acc += amt), 0)
    .toFixed(2);

  const expense = transactions
    .filter(transaction => transaction.type === 'expense')
    .map(transaction => transaction.amt)
    .reduce((acc, amt) => (acc += amt), 0)
    .toFixed(2);

  const balance = (income - expense).toFixed(2);

  return (
    <div className="row">
      <div className="col s4">
        <div className="card-panel green center-align white-text">
          <div>Income</div>
          <div id="income-amt">{income}</div>
        </div>
      </div>
      <div className="col s4">
        <div className="card-panel red center-align white-text">
          <div>Expense</div>
          <div id="expense-amt">{expense}</div>
        </div>
      </div>
      <div className="col s4">
        <div className="card-panel blue center-align white-text">
          <div>Balance</div>
          <div id="balance-amt">{balance}</div>
        </div>
      </div>
    </div>
  );
};
