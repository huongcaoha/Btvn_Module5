import React from "react";
import Header from "./Header";
import Menu from "./Menu";

export default function AdminLayout() {
  return (
    <div>
      <Header />
      <h3>Content</h3>
      <Menu />
    </div>
  );
}
