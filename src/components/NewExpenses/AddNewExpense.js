import React, { useState } from "react";

import "./NewExpense";
import NewExpense from "./NewExpense";
import "./NewExpense.css";

const AddNewExpense = (props) => {
  const [displayNewExpense, setDisplayNewExpense] = useState(false);

  const addNewExpenseClickHandler = () => {
    setDisplayNewExpense(true);
  };

  const cancelNewExpenseHandler = () => {
    setDisplayNewExpense(false);
  };

  const addExpenseHandler = (expenseData) => {
    props.onAddExpense(expenseData);
  };

  let addNewExpenseDisplay = (
    <button type="submit" onClick={addNewExpenseClickHandler}>
      Add New Expense
    </button>
  );

  if (displayNewExpense) {
    addNewExpenseDisplay = (
      <NewExpense
        onAddExpense={addExpenseHandler}
        onNewExpenseCancel={cancelNewExpenseHandler}
      />
    );
  }

  return <div className="new-expense">{addNewExpenseDisplay}</div>;
};

export default AddNewExpense;
