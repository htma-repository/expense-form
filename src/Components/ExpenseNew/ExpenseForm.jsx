import React from 'react';
import '../../Styles/ExpenseForm.scss';

const ExpenseForm = () => {
  // const [submit, setSubmit] = useState();
  // const sumbitNewExpense = () => {
  //   return;
  // };
  return (
    <form action="">
      <div className="new__expense--controls">
        <div className="new__expense--control">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>

        <div className="new__expense--control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div className="new__expense--control">
          <label htmlFor="">Date</label>
          <input type="date" min="2017-01-01" max="2022-12-31" />
        </div>
      </div>

      <div className="new__expense--actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
