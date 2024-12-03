import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import routers from "./routers/routers.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routers}>
    <App />
  </RouterProvider>
);
