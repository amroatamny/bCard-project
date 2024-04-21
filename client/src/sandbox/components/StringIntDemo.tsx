import React from "react";

const StringIntDemo = () => {
  let bool = true;
  bool = false;
  return (
    <>
      <h1> {bool ? "yes" : "no"}</h1>
    </>
  );
};

export default StringIntDemo;
