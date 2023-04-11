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

    return (
        <Card className="expenses">
            <ExpensesFilter onYearChange={yearChangeHandler}/>
            {props.items.map((item,index)=>{
               return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            })};
     </Card>
    );
}

export default Expenses;