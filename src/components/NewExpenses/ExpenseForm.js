import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [result, setResult] = useState({
        title: '',
        date: new Date(),
        amount: 0
    });

    const handleChange = (event) => {
       setResult((prevState)=>{ 
            prevState[event.target.name] = event.target.value;
            return prevState;
        });
    };   

    const addExpenseHandler = (event) => {
        event.preventDefault();
        props.setNewFormData(result);
    };

    return (
        <form onSubmit={addExpenseHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={handleChange} name='title' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={handleChange} name='amount' min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={handleChange} name='date' min='2019-01-01' max='2023-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;