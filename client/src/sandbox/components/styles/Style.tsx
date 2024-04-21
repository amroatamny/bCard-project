import React from "react";
import { CSSProperties } from "react";
const Style = () => {
  const test: CSSProperties = {
    backgroundColor: "red",
    color: "white",
    fontWeight: "bolder",
  };
  return <div style={test}>Style</div>;
};

// const Style = () => {
//   return <div style={{ backgroundColor: "blueviolet" }}>Style</div>;
// };

export default Style;
