import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredtitle] = useState("");

  const [enteredAmount, setEnteredAmount] = useState("");

  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredtitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onCancelClickHandler = () => {
    console.log("Clicking to cancel...");
    props.onNewExpenseCancel();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseDate(expenseData);

    setEnteredtitle("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancelClickHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
