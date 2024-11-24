import React from "react";

export default function Event() {
  function handleClick() {
    console.log("Clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
