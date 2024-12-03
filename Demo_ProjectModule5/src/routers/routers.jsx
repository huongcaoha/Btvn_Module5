import { createBrowserRouter } from "react-router-dom";
import protectedRouters from "./protected.routes";
import publicRouters from "./public.routes";

const mergeRouter = [...publicRouters, ...protectedRouters];
const routers = createBrowserRouter(mergeRouter);

export default routers;
