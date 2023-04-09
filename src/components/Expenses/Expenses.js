import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const items = (props) => {    
    return (
        <Card className="expenses">
            {props.items.map((item,index)=>{
               return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            })};
     </Card>
    );
}

export default items;