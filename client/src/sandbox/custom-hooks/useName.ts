import { useState } from "react";

const useName = (initialName: String = " ") => {
  const [name, setName] = useState(initialName);

  return { name, setName };
};
export default useName;
