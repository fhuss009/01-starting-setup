import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [selectedFilterDate, setSelectedFilterDate] = useState('2020');

    const handleExpenseFilterSelection = (selectedDate) => {
        console.log('Selected date: ' + selectedDate);
        setSelectedFilterDate(selectedDate);
        console.log('Selected date (hook): ' + selectedFilterDate);

    }

    return(
        <div>
            <h1> Current selected date: {selectedFilterDate}</h1>
            <Card className="expenses">
                <ExpensesFilter selectedValue = {selectedFilterDate} onExpenseFilterSelection = {handleExpenseFilterSelection} />
                <ExpenseItem id={props.expenses[0].id} title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
                <ExpenseItem id={props.expenses[1].id} title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
                <ExpenseItem id={props.expenses[2].id} title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
                <ExpenseItem id={props.expenses[3].id} title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem>
            </Card>
        </div>
    )
}

export default Expenses;