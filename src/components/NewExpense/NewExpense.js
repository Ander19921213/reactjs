import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import React,{useState} from 'react';

const NewExpense = (props) =>{
   const [isEditing,setisEditing] = useState(true);
    const SaveExpenseDataHandler = (amount) =>{
        const expenseData = {
            ...amount,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
    };

    const startEditingHandler = () =>{
        setisEditing(true);
    }
    const stopEditingHandler = () => {
        setisEditing(false)
    }
    return <div className="new-expense">
       {!isEditing && <button onClick={startEditingHandler}>Add expense</button> }
       {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
   
    </div>
}

export default NewExpense;