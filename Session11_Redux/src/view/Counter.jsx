import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

export default function Counter() {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      Counter : {counter}
      <br />
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}
