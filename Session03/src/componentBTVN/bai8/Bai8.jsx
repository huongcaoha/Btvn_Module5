import React, { useState } from "react";
import Buttons from "./Buttons";

export default function Bai8() {
  let [time, setTime] = useState(60);
  let [timeId, setTimeId] = useState(null);

  function start() {
    setTimeId(
      setInterval(() => {
        setTime((pre) => pre - 1);
      }, 1000)
    );
  }

  function stop() {
    clearInterval(timeId);
    setTimeId(null);
  }

  function reset() {
    setTime(60);
    clearInterval(null);
  }

  return (
    <>
      <h1>Đây là bài tập 8</h1>
      <h2>Time : {time}</h2>
      <Buttons
        start={start}
        stop={stop}
        reset={reset}
        timeId={timeId}
        time={time}
      />
      <hr />
    </>
  );
}
