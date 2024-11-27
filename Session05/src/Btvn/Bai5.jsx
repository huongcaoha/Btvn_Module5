import React, { useEffect, useState } from "react";

export default function Bai5() {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timeId = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, []);
  return (
    <div>
      <h1>Đây là bài tập 5</h1>
      <h3>Bây giờ là : {timer}</h3>
      <br />
      <hr />
    </div>
  );
}
