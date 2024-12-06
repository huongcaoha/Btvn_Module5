import LoginPage from "@/pages/login";
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoginPage = React.lazy(() => import("@/pages/login"));
const Da = React.lazy(() => import("@/pages/login"));
const LoginPage = React.lazy(() => import("@/pages/login"));
const LoginPage = React.lazy(() => import("@/pages/login"));

const LazyLoad = ({ children }) => {
  return <Suspense></Suspense>;
};
const routers = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
