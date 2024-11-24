import React from "react";
import ChildrenComponent from "./ChildrenComponent";
import Button from "./Button";
import Event from "./Event";

export default function ParentComponent() {
  const userName = " Nguyen Cong Huong";
  return (
    <div>
      <h3>ParentComponent</h3>
      <hr />
      <Event />
      <hr />
      <ChildrenComponent userName={userName} />
    </div>
  );
}
