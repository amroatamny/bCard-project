import { useState, useMemo } from "react";
import { colorLog } from "../../utils";

// const UseMemo = () => {
//   const [age, setAge] = useState(1);
//   const [height, setHeight] = useState(2);

//   const incrementAge = () => setAge((prev) => prev + 1);
//   const incrementHeight = () => setHeight((prev) => prev + 1);

//   const slowFunction = () => {
//     for (let i = 0; i < 2_500_000_000; i++) {}
//     colorLog("in slow function", "#4caf50");
//     return age * 2;
//   };

//   console.log(typeof slowFunction);

//   return (
//     <div>
//       <p>Height: {height}</p>
//       <p>Age multiple: {slowFunction()}</p>

//       <button style={{ padding: 4 }} onClick={incrementAge}>
//         age
//       </button>
//       <button style={{ padding: 4 }} onClick={incrementHeight}>
//         height
//       </button>
//     </div>
//   );
// };

const UseMemo = () => {
  const [age, setAge] = useState(1);
  const [height, setHeight] = useState(2);

  const incrementAge = () => setAge((prev) => prev + 1);
  const incrementHeight = () => setHeight((prev) => prev + 1);

  const slowFunction = useMemo(() => {
    for (let i = 0; i < 2_500_000_000; i++) {}
    colorLog("in slow function", "#4caf50");
    return age * 2;
  }, [age]);

  console.log(typeof slowFunction);

  return (
    <div>
      <p>Height: {height}</p>
      <p>Age multiple: {slowFunction}</p>

      <button style={{ padding: 4 }} onClick={incrementAge}>
        age
      </button>
      <button style={{ padding: 4 }} onClick={incrementHeight}>
        height
      </button>
    </div>
  );
};

export default UseMemo;
