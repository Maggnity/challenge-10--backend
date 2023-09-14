import { Router } from "express"
import { TaskRouter } from "./Task";
import { accountServiceRoutes } from "./accountService";

export const apiRouter = () => {

    const routes = Router();

    routes.use(accountServiceRoutes())
    routes.use(TaskRouter())


    return routes
}