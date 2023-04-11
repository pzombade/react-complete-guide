import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0.05);
    const [date, setDate] = useState();

    const titleChange = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    };

    const amountChange = (event) => {
        console.log(event.target.value);
        setAmount(event.target.value);
    };

    const onDateChange = (event) => {
        setDate(event.target.value);
        console.log(event.target.value);
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChange} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' onChange={onDateChange} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;