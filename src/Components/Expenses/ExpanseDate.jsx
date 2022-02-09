import React from 'react';

import '../../Styles/ExpanseDate.scss';
import Card from '../UI/Card';

const ExpanseDate = ({ dates }) => {
  const month = dates.toLocaleString('en-Us', { month: 'long' });
  const day = dates.toLocaleString('en-US', { day: '2-digit' });
  const year = dates.getFullYear();

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </Card>
  );
};

export default ExpanseDate;
