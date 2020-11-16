import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+Click me</button>
      <button onClick={() => setCount(count - 1)}>-Click me</button>
    </div>
  );
}

// function Example() {
//   // 새로운 state 변수를 선언하고, count라 부르겠습니다.
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
