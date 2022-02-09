import React from 'react';

import ExpanseDate from './ExpanseDate';
import Card from '../UI/Card';
import '../../Styles/ExpenseItem.scss';

const ExpenseItem = ({ title, amount, date }) => {
  // useState untuk inisialisasi perubahan pada tag atau data components
  // const [titles, setTitles] = useState(title);

  // onClick untuk buat eventListener versi React & buat function buat jalanin perubahan ketika di click
  // const clickHandler = () => setTitles('Changes!');

  return (
    <li>
      <Card className="expense__item">
        <ExpanseDate dates={date} />
        <div className="expense__item--description">
          <h2>{title}</h2>
          <div className="expense__item--price">$ {amount}</div>
        </div>
        {/* <button className="expense__item--button card" onClick={clickHandler}>
          Edit
        </button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
