import { createBrowserRouter } from "react-router-dom";
import adminRoutes from "./admin.routes";
import userRoutes from "./user.routes";
import allRouters from "./all.routes";

const mergeRouters = [...userRoutes, ...adminRoutes, ...allRouters];

const routers = createBrowserRouter(mergeRouters);

export default routers;
