import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");

  const handleExpenseFilterSelection = (selectedDate) => {
    setSelectedFilterYear(selectedDate);
  };

  const filterExpenses = (unfilteredExpense) => {
    const unfilteredExpenseYear = unfilteredExpense.date.getFullYear().toString()
    return unfilteredExpenseYear === selectedFilterYear;
  };

  const filteredExpenses = props.expenses.filter(filterExpenses)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={selectedFilterYear}
          onExpenseFilterSelection={handleExpenseFilterSelection}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
