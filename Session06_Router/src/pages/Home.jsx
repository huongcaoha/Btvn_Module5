import React from "react";
import Header from "./Header";
import { Outlet, Route, Routes } from "react-router-dom";

export default function Home({ children, isLogin }) {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}
