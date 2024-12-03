import { createBrowserRouter } from "react-router-dom";
import User from "../component/pages/User";
import Admin from "../component/pages/Admin";
import ProductManagement from "../pages/admin/ProductManagement";
import CategoryManagement from "../pages/admin/CategoryManagement";

const protectedRouters = [
  {
    path: "/user",
    element: <User />,
    children: [],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "products",
        element: <ProductManagement />,
      },
      {
        path: "category",
        element: <CategoryManagement />,
      },
    ],
  },
];
export default protectedRouters;
