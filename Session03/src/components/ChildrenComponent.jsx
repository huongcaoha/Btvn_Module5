import React from "react";

export default function ChildrenComponent({ userName }) {
  return (
    <div>
      <h3>ChildrenComponent</h3>
      <h3>{userName}</h3>
    </div>
  );
}
