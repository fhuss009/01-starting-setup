import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedFilterDate, setSelectedFilterDate] = useState("2020");

  const handleExpenseFilterSelection = (selectedDate) => {
    console.log("Selected date: " + selectedDate);
    console.log(typeof(selectedDate))

    setSelectedFilterDate(selectedDate);
  };

  const filterExpenses = (unfilteredExpense) => {
    const unfilteredExpenseYear = unfilteredExpense.date.getFullYear().toString()
    return unfilteredExpenseYear === selectedFilterDate;
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={selectedFilterDate}
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
