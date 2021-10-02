import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");

  const handleExpenseFilterSelection = (selectedDate) => {
    setSelectedFilterYear(selectedDate);
  };

  const filterExpenses = (unfilteredExpense) => {
    const unfilteredExpenseYear = unfilteredExpense.date.getFullYear().toString()
    return unfilteredExpenseYear === selectedFilterYear;
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={selectedFilterYear}
          onExpenseFilterSelection={handleExpenseFilterSelection}
        />

        {props.expenses.filter(filterExpenses).map((filteredExpense) => (
          <ExpenseItem
            key={filteredExpense.id}
            title={filteredExpense.title}
            amount={filteredExpense.amount}
            date={filteredExpense.date}
          />
        ))}
      
      </Card>
    </div>
  );
};

export default Expenses;
