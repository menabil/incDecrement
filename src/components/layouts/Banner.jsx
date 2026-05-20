// import { useState } from "react";
// import Flex from "../Flex";

// const Banner = () => {
//   let [count, setcount] = useState(0);
//   const Increment = () => {
//     setcount(count + 1);
//   };
//   const Decrement = () => {
//     if (count > 1) {
//       setcount(count - 1);
//     }
//   };
//   return (
//     <>
//       <div className="w-[400px] mx-auto">
//         <Flex
//           className={
//             "border-2 border-gray-500 rounded-2xl py-1 px-5.5 justify-between"
//           }
//         >
//           <p
//             className="text-3xl font-medium cursor-pointer"
//             onClick={Decrement}
//           >
//             -
//           </p>
//           <p className="text-xl">{count}</p>
//           <p
//             className="text-3xl font-medium cursor-pointer"
//             onClick={Increment}
//           >
//             +
//           </p>
//         </Flex>
//       </div>
//     </>
//   );
// };

// export default Banner;

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const changeCount = (value) => {
    const nextCount = count + value;
    if (nextCount >= 0 && nextCount <= 10) {
      setCount(nextCount);
    }
  };

  return (
    <div className="text-center mt-12 font-sans">
      <h2 className="text-2xl font-semibold text-gray-500">
        React Counter (0 - 10)
      </h2>
      <h1 className="text-5xl font-bold my-4 text-gray-700">{count}</h1>

      <div className="flex justify-center gap-2">
        {/* Decrement Button */}
        <button
          onClick={() => changeCount(-1)}
          disabled={count === 0}
          className="px-5 py-2.5 rounded text-white bg-red-400 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          - Decrement
        </button>

        {/* Reset Button */}
        <button
          onClick={() => setCount(0)}
          className="px-5 py-2.5 rounded text-white bg-gray-400 hover:bg-gray-600 cursor-pointer transition-colors"
        >
          Reset
        </button>

        {/* Increment Button */}
        <button
          onClick={() => changeCount(1)}
          disabled={count === 10}
          className="px-5 py-2.5 rounded text-white bg-green-400 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          + Increment
        </button>
      </div>

      {/* Warnings */}
      <div className="mt-4 h-6 text-red-400 font-bold">
        {count === 10 && "Maximum limit of 10 reached!"}
        {count === 0 && "Minimum limit of 0 reached!"}
      </div>
    </div>
  );
}

export default Counter;
