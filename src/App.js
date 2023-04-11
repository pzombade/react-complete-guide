import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';

const App = () => {
  
  const [expenses, setExpenses] = useState(loadExpenses());

    const yearChangeHandler = (event) => {      
        const expArr = loadExpenses().filter(item =>{
            return item.date.getFullYear().toString() === event;
        } );
        setExpenses(expArr);

    };

    const onNewFormDataHandler = (data)=>{
      data = {...data};
      data.date = new Date(data.date);
      setExpenses((prevState)=>{
        return [data, ...prevState];
      });
  };

  return (
    <div className="App">
      <NewExpense setNewFormData={onNewFormDataHandler}/>     
      <Expenses items={expenses} onYearChange={yearChangeHandler}/>
    </div>
  );

  function loadExpenses() {
    return [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ];
  }
}

export default App;
