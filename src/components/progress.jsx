import React from "react";

const Progress = (props) => {
  const { value, limit } = props;
  const progressVal = value;

  const fillerStyles = {
    width: `${progressVal}%`,
    transition: "0.5s",
  };

  let barLimitClass = "barColorStyle ";
  barLimitClass += value === limit ? "barColorRed" : "barColorBlue";

  return (
    <div className="barContainer">
      <div className="progVal">{`${progressVal}%`}</div>
      <div style={fillerStyles} className={barLimitClass}>
        <span className="barLabel"></span>
      </div>
    </div>
  );
};

export default Progress;
