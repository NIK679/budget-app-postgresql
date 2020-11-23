import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const {
    transactions,
    addTransaction,
    updateTransaction,
    updId,
    setUpdId,
  } = useContext(GlobalContext);

  // let transaction = {};
  // if (updId !== '') {
  //   transaction = transactions.filter(txn => txn._id === updId);
  // } else {
  //   transaction = { type: '', desc: '', amt: '', date: '', time: '' };
  // }

  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [amt, setAmt] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // const [type, setType] = useState(transaction.type);
  // const [desc, setDesc] = useState(transaction.desc);
  // const [amt, setAmt] = useState(transaction.amt);
  // const [date, setDate] = useState(transaction.date);
  // const [time, setTime] = useState(transaction.time);

  const clearFields = () => {
    setType('');
    setDesc('');
    setAmt('');
    setDate('');
    setTime('');
  };

  const onSubmit = e => {
    e.preventDefault();
    let temp;
    if (date === '') temp = new Date();
    else if (time === '') temp = new Date(`${date}`);
    else temp = new Date(`${date} ${time}`);
    const Transaction = {
      type,
      desc,
      amt: parseInt(amt),
      date: temp,
    };
    if (updId === '') {
      addTransaction(Transaction);
    } else {
      updateTransaction(updId, Transaction);
      setUpdId('');
    }
    clearFields();
  };

  const onCancel = e => {
    e.preventDefault();
    setUpdId('');
    clearFields();
  };

  return (
    <>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 form-control">
              <select value={type} onChange={e => setType(e.target.value)}>
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
              <label htmlFor="type">Type</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 form-control">
              <input
                type="text"
                value={desc}
                onChange={e => setDesc(e.target.value)}
              />
              <label htmlFor="desc">Description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 form-control">
              <input
                type="number"
                value={amt}
                onChange={e => setAmt(e.target.value)}
              />
              <label htmlFor="amt">Amount</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 form-control">
              <input
                type="date"
                /* className="datepicker" */ value={date}
                onChange={e => setDate(e.target.value)}
              />
              <label htmlFor="date">Date</label>
            </div>
            <div className="input-field col s6 form-control">
              <input
                type="time"
                /* className="timepicker" */ value={time}
                onChange={e => setTime(e.target.value)}
              />
              <label htmlFor="time">Time</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s3">
              <button className="btn btn-large" onClick={onSubmit}>
                {updId === '' ? 'Submit' : 'Update'}
              </button>
            </div>

            <div className="input-field col s9">
              <button className="btn btn-large" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
