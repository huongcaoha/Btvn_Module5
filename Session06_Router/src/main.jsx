import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/Index.jsx";
import MyContext from "./pages/MyContext.jsx";
import GlobalContext from "./pages/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <RouterProvider router={routers}></RouterProvider>
  </GlobalContext>
);
