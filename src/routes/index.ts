import { Router } from "express"
import { TaskRouter } from "./Task";
import { accountServiceRoutes } from "./accountService";
import { AuthRoutes } from "./auth";
import ticketsQuoteRouter from "./ticketQuote";
import sellerOfferRoutes from "./sellerOffer";

export const apiRouter = () => {

    const routes = Router();

    routes.use(accountServiceRoutes())
    routes.use(AuthRoutes())
    routes.use(TaskRouter())
    routes.use(ticketsQuoteRouter())
    routes.use(sellerOfferRoutes())

    return routes
}