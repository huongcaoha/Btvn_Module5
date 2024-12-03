import React from "react";
import HeaderAdmin from "../../layout/HeaderAdmin";
import SideBar from "../../layout/SideBar";
import { Outlet } from "react-router-dom";

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
