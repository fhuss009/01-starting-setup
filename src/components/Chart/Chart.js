import React from "react";

import CharBar from "./CharBar";
import "./Chart.css";

const Char = (props) => {
  return (
    <div>
      {props.dataPoints.map((dataPoint) => {
        <CharBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxVale={null}
          label={dataPoint.value}
        />;
      })}
    </div>
  );
};

export default Char;
