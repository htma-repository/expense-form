import React, { useState } from 'react';

import Expenses from './Components/Expenses/Expenses';
import ExpenseFormWrapper from './Components/ExpenseNew/ExpenseFormWrapper';

// class Expense {
//   constructor(id, title, amount) {
//     this.id = id;
//     this.title = title;
//     this.amount = amount;
//     this.date = new Date();
//   }
// }
// const expenses1 = new Expense('e1', 'Toilet Paper', 94.12);
// const expenses2 = new Expense('e2', 'New TV', 799.49);
// const expenses3 = new Expense('e3', 'Car Insurance', 294.67);
// const expenses4 = new Expense('e4', 'New Desk (Wooden)', 450);

const App = () => {
  const [newItems, setNewItems] = useState([]);
  // const expenseComp = [expenses1, expenses2, expenses3, expenses4];

  const expensesFormNewHandler = (expense) => {
    setNewItems((prevExpense) => [expense, ...prevExpense]);
  };

  return (
    <div>
      <ExpenseFormWrapper onExpensesFormNew={expensesFormNewHandler} />

      <Expenses items={newItems} />
    </div>
  );
};

export default App;
