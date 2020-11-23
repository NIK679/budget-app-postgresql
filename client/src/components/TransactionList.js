import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { DailyTransactions } from './DailyTransactions';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  const dates = transactions
    .filter(
      (transaction, i) =>
        i === 0 ||
        transaction.date.toDateString() !==
          transactions[i - 1].date.toDateString()
    )
    .map(transaction => transaction.date.toDateString());

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="row">
        {dates.map(date => (
          <>
            <DailyTransactions key={date} date={date} />
          </>
        ))}
      </div>
    </>
  );
};
