import Admin from "../pages/Admin";
import User from "../pages/User";

const protectedRouters = [
  {
    path: "/admin",
    element: <Admin />,
    children: [],
  },

  {
    path: "/user",
    element: <User />,
    children: [],
  },
];
export default protectedRouters;
