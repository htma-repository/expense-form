import React from "react";

import "../../Styles/ChartBar.scss";

const ChartBar = (props) => {
  const { value, maxValue, label } = props;
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>

      <div className="chart-bar__label">{label}</div>
    </div>
  );
};
export default ChartBar;
