import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

import React, {useState} from 'react';

const dummy_expenses = [
  { id: 'e1', title: "bed", amount: 500, date: new Date(2021, 2, 28) },
  { id: 'e2', title: "grocery", amount: 1000, date: new Date(2020, 5, 14) },
  { id: 'e3', title: "furniture", amount: 1500, date: new Date(2021, 4, 10) },
  { id: 'e4', title: "fruits", amount: 700, date: new Date(2021, 6, 16) },
];

const App = () => {
const [expenses, setExpenses] = useState(dummy_expenses);

const addExpenseHandler = expense =>{
  //console.log('in App.js');
  // console.log(expense);
  // console.log(expenses);
  //setExpenses([expense, ...expenses]);
  setExpenses((prevExpense) => {
    return [expense, ...prevExpense]
  })
}


  return (
    <div>
      <NewExpenses onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses} > </Expenses>
    {/* {  console.log(expenses.filter(expense =>{return expense.date.getFullYear() === 2021}))} */}
    </div>
  );
}

export default App;
