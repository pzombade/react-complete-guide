import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

    const onNewFormDataHandler = (data)=>{
        props.setNewFormData(data);
    };

    return (
        <div className="new-expense">
           <ExpenseForm setNewFormData={onNewFormDataHandler} />
        </div>
    );
};

export default NewExpense;