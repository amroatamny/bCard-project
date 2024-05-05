import React from "react";
import useName from "./useName";

const CustomName = () => {
  const { name, setName } = useName();
  return (
    <div>
      <p>name:{name}</p>
      <input onChange={(e) => setName(e.target.value)} type="text" />
    </div>
  );
};

export default CustomName;
