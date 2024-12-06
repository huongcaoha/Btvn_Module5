import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Count() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: "increment",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "decrement",
    });
  };
  return (
    <div>
      Count : {count}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
