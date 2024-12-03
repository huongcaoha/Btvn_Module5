import { createBrowserRouter } from "react-router-dom";
import protectedRouters from "./protected.routes";
import publicRouters from "./public.routes";

const mergeRouters = [...publicRouters, ...protectedRouters];

const routers = createBrowserRouter(mergeRouters);
export default routers;
