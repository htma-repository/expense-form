import React from 'react';
import '../../Styles/ExpensesList.scss';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ itemsList }) => {
  if (itemsList.length === 0) {
    return <h1 className="expenses-list__fallback">No Data Expenses</h1>;
  }

  return (
    <ul className="expenses-list">
      {itemsList.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
