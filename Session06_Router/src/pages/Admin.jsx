import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/admin/product">Product</NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
      <h1>footer</h1>
    </div>
  );
}
