import React from "react";
import "../../Styles/ExpensesList.scss";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const { itemsList } = props;

  let itemListContent = (
    <h1 className="expenses-list__fallback">No Data Expenses</h1>
  );
  if (itemsList.length > 0) {
    itemListContent = itemsList.map((item) => {
      return (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      );
    });
  }
  return <ul className="expenses-list">{itemListContent}</ul>;
};

export default ExpensesList;
