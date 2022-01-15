import React from 'react';
import '../../Styles/ExpenseFormWrapper.scss';
import ExpenseForm from './ExpenseForm';

const ExpenseNew = () => {
  return (
    <div className="new__expense">
      <ExpenseForm />
    </div>
  );
};

export default ExpenseNew;
