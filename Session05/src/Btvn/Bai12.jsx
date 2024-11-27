import React, { useEffect, useState } from "react";

export default function Bai12() {
  const [second, setSecond] = useState(0);
  const [miliSecond, setMiliSecond] = useState(0);
  const [timeId, setTimeId] = useState(null);

  useEffect(() => {
    if (timeId) {
      clearInterval(timeId); // Xóa interval cũ nếu có
    }

    return () => clearInterval(timeId); // Cleanup
  }, []); // Chạy lại khi miliSecond thay đổi

  const handleStart = () => {
    if (!timeId) {
      const id = setInterval(() => {
        setMiliSecond((prevMili) => {
          if (prevMili >= 999) {
            setSecond((prevSecond) => prevSecond + 1);
            return 0;
          }
          return prevMili + 1;
        });
      }, 1);
      setTimeId(id);
    }
  };

  const handleStop = () => {
    clearInterval(timeId);
    setTimeId(null); // Reset timeId
  };

  const handleContinue = () => {
    handleStart(); // Gọi lại hàm start
  };

  const handleReStart = () => {
    setSecond(0);
    setMiliSecond(0);
    handleStop();
  };

  return (
    <div>
      <h1>Đây là bài tập 12</h1>
      <h3>
        Đếm thời gian: {second}.{String(miliSecond).padStart(3, "0")}
      </h3>
      {second === 0 && miliSecond === 0 ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleReStart}>Re-Start</button>
      )}
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleContinue}>Continue</button>
      <br />
      <hr />
    </div>
  );
}
