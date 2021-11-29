import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem"
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from '../ExpensesFilter'
const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState('2020');
 
const filteredDateHandler = (selectedYear)=>{

  console.log("in expense.js");
  setfilteredYear(selectedYear);
  console.log(selectedYear);

}

const filteredExpenses = props.items.filter(expense =>{return expense.date.getFullYear().toString() === filteredYear})
console.log(filteredExpenses + 'test')
    return(
     
        <Card className = 'expenses'>
          <div>
            <ExpensesFilter selected= {filteredYear} onFiltered = {filteredDateHandler}/>
            {filteredExpenses.map(expense => <ExpenseItem 
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />  
          )}

        </div>
    </Card>
    );
}

export default Expenses;