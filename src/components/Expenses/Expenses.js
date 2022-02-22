import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';


function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2022');


  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filtedExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear
  })




  return (<div>
  <Card className="expenses">
  <ExpensesFilter selected={filteredYear}  
  onChangeFilter={filterChangeHandler} />
  <ExpenseChart expenses={filtedExpense} />
<ExpenseList items={filtedExpense}/>


  </Card>
</div>);
  
}

export default Expenses;