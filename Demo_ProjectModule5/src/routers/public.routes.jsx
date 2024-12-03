import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import Shop from "../pages/user/Shop";
import AboutUs from "../pages/user/AboutUs";
import User from "../component/pages/User";
import Login from "../pages/user/Login";

const publicRouters = [
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/shop",
    element: <Shop />,
    children: [],
  },
  {
    path: "/about",
    element: <AboutUs />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
];
export default publicRouters;
