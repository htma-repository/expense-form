import React, { useState } from 'react';

import ExpanseDate from './ExpanseDate';
import Card from '../UI/Card';
import '../../Styles/ExpenseItem.scss';

const ExpenseItem = (props) => {
  // useState untuk inisialisasi perubahan pada tag atau data components
  const [title, setTitle] = useState(props.title);

  // onClick untuk buat eventListener versi React & buat function buat jalanin perubahan ketika di click
  const clickHandler = () => setTitle('Changes!');

  return (
    <Card className="expense__item">
      <ExpanseDate date={props.date} />
      <div className="expense__item--description">
        <h2>{title}</h2>
        <div className="expense__item--price">$ {props.amount}</div>
      </div>
      <button className="expense__item--button card" onClick={clickHandler}>
        Edit
      </button>
    </Card>
  );
};

export default ExpenseItem;
