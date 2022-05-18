import React, { useState } from "react";
import "../../Styles/ExpenseFormWrapper.scss";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const ExpenseFormWrapper = ({ onExpensesFormNew, newLocalStorage }) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpensesData = (expensesData) => {
    const expensesDataObj = {
      ...expensesData,
      id: Date.now(),
    };

    onExpensesFormNew(expensesDataObj);
    setShowForm(false);
  };

  const buttonShowHandler = () => {
    setShowForm(true);
  };

  const buttonCancelHandler = () => {
    setShowForm(false);
  };

  return (
    <Card className="new__expense">
      {!showForm && (
        <button onClick={buttonShowHandler}>Add New Expenses</button>
      )}

      {showForm && (
        <ExpenseForm
          onSaveExpensesData={saveExpensesData}
          onShowForm={buttonCancelHandler}
        />
      )}
    </Card>
  );
};

export default ExpenseFormWrapper;
