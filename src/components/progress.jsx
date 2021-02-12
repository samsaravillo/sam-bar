import React, { useState } from "react";

const Progress = (props) => {
  console.log(props);
  const { value, limit } = props;

  const progressVal = value;
  const bgcolor = "#4EAFC9";

  const containerStyles = {
    height: 30,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    position: "relative",
    overflow: "hidden",
  };

  const fillerStyles = {
    height: "100%",
    width: `${progressVal}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div className="progVal">{`${progressVal}%`}</div>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default Progress;
