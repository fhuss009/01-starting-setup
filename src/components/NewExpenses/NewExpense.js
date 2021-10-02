import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpensedData) => {
    const expenseData = {
      ...enteredExpensedData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const saveCancelExpenseHandler = (cancelNewExpense) => {
    props.onNewExpenseCancel();
  };

  return (
    <div>
      <ExpenseForm
        onSaveExpenseDate={saveExpenseDataHandler}
        onNewExpenseCancel={saveCancelExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
