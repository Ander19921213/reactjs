import './ExpenseForm.css';
import React,{useState} from 'react';

const ExpenseForm = (props) => {
    const [title,setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandle = (event) =>{
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
    }
    const dateChangehandler = (event) =>{
        setDate(event.target.value);
    }


    const onSubmitHandler = (event) =>{
        event.preventDefault();

        const ExpenseData = {
            title: title,
            amount: amount,
            date : new Date(date)
        }
        props.onSaveExpenseData(ExpenseData);
        setTitle('');
        setDate('');
        setAmount('');
    }

    return (<form onSubmit={onSubmitHandler}>
        <div className="new-expense__control">
            <div className="new-expense__control" >
            <label>Tittle</label>
          <input type="text" 
          value={title}
          onChange={titleChangeHandle} />
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
          <input type="number" min="0.01" step="0.01" 
         value={amount}
         onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
            <label>Date</label>
          <input type="date" min="2019-12-01" max="2022-12-31" 
          value={date}
          onChange={dateChangehandler}  />
            </div>
        </div>
        <div className="new-expense-button">
             <button type="button" onClick={props.onCancel}>cancel</button>
        <button type="submit"> Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm;