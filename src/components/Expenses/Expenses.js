import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import './ExpensesFilter.css'
import ExpensesFilter from './ExpensesFilter';

import React, {useState} from 'react';

const Expenses = (props) => {   

    const yearChangeHandler = (event) => {
        console.log('Expenses ' + event);
        props.onYearChange(event);
    };

    let expenseContnet = <p>No expenses available.</p>

    if(props.items.length > 0){
        expenseContnet = props.items.map((item,index)=>{
            return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
         });
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onYearChange={yearChangeHandler}/>
            {expenseContnet};
     </Card>
    );
}

export default Expenses;