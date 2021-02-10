import React from "react";

const Progress = (props) => {
  const { bars } = props;
  return (
    <div>
      {bars && bars.length > 0
        ? bars.map((item) => <div key={item}>{item}</div>)
        : "Loading..."}
      <br />
      <br />
      <button>-25</button>
      <button>-10</button>
      <button>10</button>
      <button>25</button>
    </div>
  );
};

export default Progress;
