// import React, { useState } from "react";

// const CustomCounterHook = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <p>counter: {counter}</p>
//       <button
//         onClick={() => setCounter((prev) => prev + 1)}
//         style={{ padding: 3 }}
//       >
//         increment
//       </button>
//       <button
//         onClick={() => setCounter((prev) => prev - 1)}
//         style={{ padding: 3 }}
//       >
//         decrement
//       </button>
//       <button onClick={() => setCounter(0)} style={{ padding: 3 }}>
//         reset
//       </button>
//     </div>
//   );
// };

// export default CustomCounterHook;

import React from "react";
import useCounter from "./useCounter";

const CustomCounterHook = () => {
  const [counter, increment, decrement, reset] = useCounter();

  return (
    <div>
      <p>counter: {String(counter)}</p>

      {typeof increment === "function" && (
        <button onClick={increment} style={{ padding: 3 }}>
          increment
        </button>
      )}

      {typeof decrement === "function" && (
        <button onClick={decrement} style={{ padding: 3 }}>
          decrement
        </button>
      )}
      {typeof reset === "function" && (
        <button onClick={reset} style={{ padding: 3 }}>
          reset
        </button>
      )}
    </div>
  );
};

export default CustomCounterHook;
