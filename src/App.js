import { useState } from "react";
import "./styles.css";

const useCounterHook = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  let increment = () => setCount(count + 1);
  let decrement = () => setCount(count - 1);
  let resetCount = () => setCount(initialValue);
  return { count, increment, decrement, resetCount };
};

export default function App() {
  const { count, increment, decrement, resetCount } = useCounterHook(10);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> decrement </button>
      <button onClick={resetCount}> Reset </button>
      <h2>{count}</h2>
    </div>
  );
}
