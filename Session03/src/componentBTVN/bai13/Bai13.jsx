import React, { useState } from "react";

export default function () {
  const [status, setStatus] = useState(true);

  return (
    <div>
      <h1>Đây là bài tập 13</h1>
      {status ? (
        <div style={{ border: "1px solid black" }}>
          <p>this is modal</p>
        </div>
      ) : (
        ""
      )}
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={() => setStatus(!status)}
      >
        {status ? "On" : "Off"}
      </button>
      <hr />
    </div>
  );
}
