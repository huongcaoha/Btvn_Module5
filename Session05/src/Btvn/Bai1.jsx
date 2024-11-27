import React, { useState } from "react";

export default function Bai1() {
  const handleInput = (event) => {
    document.title = event.target.value;
  };
  return (
    <div>
      <h1>Đây là bài tập 1</h1>
      <input type="text" onChange={(event) => handleInput(event)} />
      <br />
      <hr />
    </div>
  );
}
