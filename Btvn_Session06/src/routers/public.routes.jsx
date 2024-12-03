import Product from "../baitap1/Product";
import ProductDetail from "../baitap1/ProductDetail";
import Student from "../baitap3/Student";
import LazyLoadComp from "../baitap9/LazyLoadComp";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

const publicRouters = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "product",
    element: <Product />,
    children: [
      {
        path: ":id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/lazyLoad",
    element: <LazyLoadComp />,
  },
];
export default publicRouters;
