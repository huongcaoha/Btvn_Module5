import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/user/Home";
import NotFoundPage from "../pages/user/NotFoundPage";

const publicRouter = [
  {
    path: "/",
    element: <Home />,
  },
  /**
   * nơi viết thêm router sau dòng này
   *  */

  /**
   * không đc viết router sau dòng này , phải để not found page ở dưới dùng nhé
   *  */
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
export default publicRouter;
