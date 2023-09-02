import { Router } from "express"
import { TaskRouter } from "./Task";

export const apiRouter = () => {

    const routes = Router();

    routes.use(TaskRouter())

    return routes
}