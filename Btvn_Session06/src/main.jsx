import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GlobalContext from "./pages/GlobalContext";
import { RouterProvider } from "react-router-dom";
import routers from "./routers/Routers";

createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <RouterProvider router={routers}></RouterProvider>
  </GlobalContext>
);
