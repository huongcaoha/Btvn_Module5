import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin";
import Product from "../pages/Product";
import ListProduct from "../pages/ListProduct";

const adminRoutes = [
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "product",
        element: <ListProduct />,
      },
    ],
  },
];

export default adminRoutes;
