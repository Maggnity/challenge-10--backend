import { Router } from "express"
import { TaskRouter } from "./Task";
import { accountServiceRoutes } from "./accountService";
import { AuthRoutes } from "./auth";
import ticketsQuoteRouter from "./ticketQuote";

export const apiRouter = () => {

    const routes = Router();

    routes.use(accountServiceRoutes())
    routes.use(AuthRoutes())
    routes.use(TaskRouter())
    routes.use(ticketsQuoteRouter())

    return routes
}