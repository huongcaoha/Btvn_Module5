import React from "react";

export default function Button({ children, color }) {
  return <button color={color ? "blue" : "red"}>{children}</button>;
}
