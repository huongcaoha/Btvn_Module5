import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Random() {
  const { random } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRandom = () => {
    const randomNumber = Math.ceil(Math.random() * 1000);
    dispatch({
      type: "random",
      payload: randomNumber,
    });
  };
  return (
    <div>
      Random : {JSON.stringify(random)}
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
