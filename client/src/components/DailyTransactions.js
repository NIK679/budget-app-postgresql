import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const DailyTransactions = ({ date }) => {
  const { transactions } = useContext(GlobalContext);
  let balance = 0;

  const dailyTransactions = transactions.filter(
    transaction => transaction.date.toDateString() === date
  );

  dailyTransactions.forEach(
    transaction =>
      (balance +=
        transaction.type === 'income' ? transaction.amt : -transaction.amt)
  );

  balance = balance.toFixed(2);

  return (
    <>
      <div className="divider"></div>
      <div className="row">
        <br />
        <div className="col s6">
          <span>{date}</span>
        </div>
        <div className={`col s6 ${balance >= 0 ? 'green-text' : 'red-text'}`}>
          <span>{balance}</span>
        </div>
      </div>
      {dailyTransactions.map(transaction => (
        <>
          <Transaction key={transaction._id} transaction={transaction} />
        </>
      ))}
    </>
  );
};
