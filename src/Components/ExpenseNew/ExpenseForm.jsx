import React, { useState } from 'react';
import '../../Styles/ExpenseForm.scss';

const ExpenseForm = ({ onSaveExpensesData, onShowForm }) => {
  // ! Cara multiple useState dipisah satu-satu useState

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [message, setMessage] = useState('');

  /*
   ! Cara multiple useState dijadiin satu useState
   * const [userInput, setUserInput] = useState({
   * enteredTitle: '',
   * enteredAmount: '',
   * enteredDate: '',
   * });
   */

  const titleChangeHandler = (e) => {
    // e.preventDefault();
    setEnteredTitle(e.target.value);
    /*
     * setUserInput({
     *   ...userInput,
     *   enteredTitle: e.target.value,
     * });
     *
     * OR
     *
     * setUserInput((prevState) => {
     * return {...prevState, enteredTitle: e.target.value}
     * });
     */
  };

  const amountChangeHandler = (e) => {
    // e.preventDefault();
    setEnteredAmount(e.target.value);
    /*
     * setUserInput({
     *   ...userInput,
     *   enteredAmount: e.target.value,
     * });
     *
     * OR
     *
     * setUserInput((prevState) => {
     * return {...prevState, enteredAmount: e.target.value}
     * });
     */
  };

  const dateChangeHandler = (e) => {
    // e.preventDefault();
    setEnteredDate(e.target.value);
    /*
     * setUserInput({
     *   ...userInput,
     *   enteredDate: e.target.value,
     * });
     *
     * OR
     *
     * setUserInput((prevState) => {
     * return {...prevState, enteredDate: e.target.value}
     * });
     */
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newInput = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    !enteredTitle || !enteredAmount || !enteredDate
      ? setMessage('Input Data Expanses!!')
      : onSaveExpensesData(newInput);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1 style={{ color: '#800000' }}>{message}</h1>
      <div className="new__expense--controls">
        <div className="new__expense--control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new__expense--control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new__expense--control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2017-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new__expense--actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={onShowForm}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
