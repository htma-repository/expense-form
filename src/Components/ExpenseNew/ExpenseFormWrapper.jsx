import React from 'react';
import '../../Styles/ExpenseFormWrapper.scss';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

const ExpenseNew = () => {
  return (
    <Card className="new__expense">
      <ExpenseForm />
    </Card>
  );
};

export default ExpenseNew;
