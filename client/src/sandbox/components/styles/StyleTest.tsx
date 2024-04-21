import React from "react";
import { CSSProperties } from "react";
import "./styleTest.css";
const StyleTest = () => {
  const style: CSSProperties = {
    backgroundColor: "violet",
    color: "red",
  };
  const isGreen = true;
  const color1 = () => {
    if (!isGreen) return "red";
    return "blue";
  };
  return (
    <>
      <h1 style={{ borderInlineColor: "yellow" }}>title</h1>
      <h2 style={style}>subtitle</h2>
      <br />
      <hr />
      <p className="p">paraghraph</p>
      <span style={{ backgroundColor: color1(), color: "white" }}>
        {isGreen ? "blue" : "red"}
      </span>
    </>
  );
};

export default StyleTest;
