import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) =>  {

    // const expenseTitle = 'Car Insurance';
    // const exponseDate = new Date(2021,2,28);
    // const exponsePrice = 294.67;

 
    console.log(">> "+JSON.stringify(props));
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}


export default ExpenseItem;