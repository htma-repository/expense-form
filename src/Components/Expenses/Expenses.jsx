import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "../../Styles/Expenses.scss";

const Expenses = (props) => {
  const { items } = props;
  const [filterYear, setFilterYear] = useState("2022");

  const yearFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterYearExpenses = items.filter((yearFilter) => {
    return yearFilter.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={yearFilterHandler}
      />

      <ExpensesChart expenses={filterYearExpenses} />

      <ExpensesList itemsList={filterYearExpenses} />
    </Card>
  );
};

export default Expenses;
