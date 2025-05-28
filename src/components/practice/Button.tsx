import { useState, useEffect } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("Count Being Changed into: " + count);
    return () => {
      console.log("Count Being Cleared!");
    };
  }, [count]);

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};
