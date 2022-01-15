import React from 'react';

import Expenses from './Components/Expenses/Expenses';
import ExpenseFormWrapper from './Components/ExpenseNew/ExpenseFormWrapper';

class expenses {
  constructor(id, title, amount) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.date = new Date();
  }
}
const expenses1 = new expenses('e1', 'Toilet Paper', 94.12);
const expenses2 = new expenses('e2', 'New TV', 799.49);
const expenses3 = new expenses('e3', 'Car Insurance', 294.67);
const expenses4 = new expenses('e4', 'New Desk (Wooden)', 450);

const App = () => {
  const expenseComp = [expenses1, expenses2, expenses3, expenses4];
  return (
    <div>
      <div className="container">
        <ExpenseFormWrapper />
        <Expenses items={expenseComp} />
      </div>
    </div>
  );
};

export default App;
