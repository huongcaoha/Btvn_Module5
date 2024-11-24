import React from "react";

export default function ({ start, stop, reset, timeId, time }) {
  return (
    <div>
      {!timeId ? (
        <button onClick={start} style={{ color: "blue" }}>
          {time < 60 ? "Continue" : "Start"}
        </button>
      ) : (
        <button onClick={stop} style={{ color: "black" }}>
          Stop
        </button>
      )}
      <button onClick={reset} style={{ color: "green" }}>
        Re-start
      </button>
    </div>
  );
}
