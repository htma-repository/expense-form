import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = ({ expenses }) => {
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

  const dataPoint1 = new chartData('Jan', 0),
    dataPoint2 = new chartData('Feb', 0),
    dataPoint3 = new chartData('Mar', 0),
    dataPoint4 = new chartData('Apr', 0),
    dataPoint5 = new chartData('May', 0),
    dataPoint6 = new chartData('Jun', 0),
    dataPoint7 = new chartData('Jul', 0),
    dataPoint8 = new chartData('Agt', 0),
    dataPoint9 = new chartData('Sep', 0),
    dataPoint10 = new chartData('Okt', 0),
    dataPoint11 = new chartData('Nov', 0),
    dataPoint12 = new chartData('Des', 0);

  const ChartDataPoints = [
    dataPoint1,
    dataPoint2,
    dataPoint3,
    dataPoint4,
    dataPoint5,
    dataPoint6,
    dataPoint7,
    dataPoint8,
    dataPoint9,
    dataPoint10,
    dataPoint11,
    dataPoint12,
  ];

  for (const expenseChart of expenses) {
    const expenseMonth = expenseChart.date.getMonth();
    ChartDataPoints[expenseMonth].value += expenseChart.amount;
  }

  return <Chart dataPoints={ChartDataPoints} />;
};

export default ExpensesChart;
