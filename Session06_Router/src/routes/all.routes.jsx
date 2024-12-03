import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ListProduct from "../pages/ListProduct";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import Product from "../pages/Product";
import ProductItem from "../pages/ProductItem";
import Register from "../pages/Register";

const allRouters = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/listProduct",
        element: <ListProduct />,
      },
      {
        path: "/product-detail",
        element: <ProductItem />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
];
export default allRouters;
