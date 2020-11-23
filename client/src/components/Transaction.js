import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction, setUpdId } = useContext(GlobalContext);
  return (
    <>
      <div className="row">
        <div className="col s6">
          <span className="">{transaction.desc}</span>
        </div>
        <div
          className={`col s2 ${
            transaction.type === 'income' ? 'green-text' : 'red-text'
          }`}
        >
          <span>{transaction.type === 'income' ? '+' : '-'}</span>
          <span>{transaction.amt}</span>
        </div>
        <div className="col s2">
          <span>
            <button
              className="btn green"
              onClick={() => setUpdId(transaction._id)}
            >
              <i className="material-icons tiny white-text">edit</i>
            </button>
          </span>
        </div>
        <div className="col s2">
          <span>
            <button
              className="btn red"
              onClick={() => deleteTransaction(transaction._id)}
            >
              <i className="material-icons tiny white-text">delete</i>
            </button>
          </span>
        </div>
      </div>
    </>
  );
};
