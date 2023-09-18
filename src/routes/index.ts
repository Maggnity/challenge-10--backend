import { Router } from "express"
import { TaskRouter } from "./Task";
import { accountServiceRoutes } from "./accountService";
import { AuthRoutes } from "./auth";

export const apiRouter = () => {

    const routes = Router();

    routes.use(accountServiceRoutes())
    routes.use(AuthRoutes())
    routes.use(TaskRouter())

    return routes
}