import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const { expenses } = props;
  class chartData {
    constructor(label, value) {
      this.value = value;
      this.label = label;
      this.id = this.GenerateId();
    }

    GenerateId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
  }

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agt",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  const newChartData = (month) => {
    let newData = [];
    for (let item of month) {
      newData.push(new chartData(item, 0));
    }
    return newData;
  };

  const newChartDataPoints = [...newChartData(month)];

  for (const expenseChart of expenses) {
    const expenseMonth = expenseChart.date.getMonth();
    newChartDataPoints[expenseMonth].value += expenseChart.amount;
  }

  return <Chart dataPoints={newChartDataPoints} />;
};

export default ExpensesChart;
