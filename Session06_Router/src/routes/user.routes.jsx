import User from "../pages/User";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const userRoutes = [
  {
    path: "/user",
    element: <User />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
];
export default userRoutes;
