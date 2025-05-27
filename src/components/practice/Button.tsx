import { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};
