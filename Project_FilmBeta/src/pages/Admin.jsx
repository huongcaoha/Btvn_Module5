import React from "react";

import { Outlet } from "react-router-dom";
import HeaderAdmin from "../layout/HeaderAdmin";
import SideBar from "../layout/SideBar";

export default function Admin() {
  return (
    <div>
      <HeaderAdmin />

      <div className="flex">
        <SideBar />
        <Outlet>Content</Outlet>
      </div>
    </div>
  );
}
