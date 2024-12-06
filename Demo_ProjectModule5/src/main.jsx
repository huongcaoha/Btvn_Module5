import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, RouterProvider } from "react-router-dom";
import routers from "./routers/routers.jsx";
import GlobalContext from "./pages/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <RouterProvider router={routers}></RouterProvider>
  </GlobalContext>
);
