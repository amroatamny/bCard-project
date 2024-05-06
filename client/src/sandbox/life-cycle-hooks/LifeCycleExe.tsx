// import React, { useEffect, useState } from "react";
// import { colorLog } from "../utils";

// const LifeCycleExe = () => {
//   const [count, setCount] = useState(() => {
//     colorLog("1");
//     setTimeout(() => {
//       colorLog("5");
//     }, 1000);
//     return 0;
//   });

//   useEffect(() => {
//     colorLog("3");

//     return () => {
//       colorLog("6");
//     };
//   }, []);
//   useEffect(() => {
//     colorLog("4");
//   }, [count]);

//   return (
//     <button onClick={() => setCount((prev) => prev + 1)}>
//       {colorLog("2")}count
//     </button>
//   );
// };

// export default LifeCycleExe;

import React, { useEffect, useState } from "react";
import { colorLog } from "../utils";

const LifeCycleExe = () => {
  const [count, setCount] = useState(() => {
    colorLog("1");
    setTimeout(() => colorLog("5"), 1000);
    return 0;
  });

  useEffect(() => {
    colorLog("3");

    return () => {
      colorLog("6");
    };
  }, []);

  useEffect(() => {
    colorLog("4");
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        {colorLog("2")}count //{" "}
      </button>
    </div>
  );
};

export default LifeCycleExe;
