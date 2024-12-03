import { Button } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home
      <Link to={"/product"}>
        <Button type="primary">Product</Button>
      </Link>
      <Link to={"/student"}>
        <Button type="primary">Student</Button>
      </Link>
      <Link to={"/lazyLoad"}>
        <Button type="primary">Lazy Loading</Button>
      </Link>
      <Outlet />
    </div>
  );
}
