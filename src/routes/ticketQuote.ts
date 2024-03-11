import { Router } from "express"
import { GetTicketQuotesUseCase } from "../useCases/ticketQuote/GetTicketQuotesUseCase";
import { PostTicketQuoteUseCase } from "../useCases/ticketQuote/PostTicketQuoteUseCase";
import { UpdateTicketQuoteUseCase } from "../useCases/ticketQuote/UpdateTicketQuoteUseCase";
import { DeleteteTicketQuoteUseCase } from "../useCases/ticketQuote/DeleteTicketQuoteUseCase";
import { TicketQuoteController } from "../controller/ticketQuote/ticketQuoteController";
import { TicketQuoteRepository } from "../repository/ticketQuoteRepository";

export default function ticketsQuoteRouter() {


    const routes = Router()

    const ticketsRepository = new TicketQuoteRepository()

    const findAllTickets = new GetTicketQuotesUseCase(ticketsRepository);
    const createTicket = new PostTicketQuoteUseCase(ticketsRepository)
    const updateTicket = new UpdateTicketQuoteUseCase(ticketsRepository)
    const deleteTicket = new DeleteteTicketQuoteUseCase(ticketsRepository)

    const controller = new TicketQuoteController(
        findAllTickets,
        createTicket,
        updateTicket,
        deleteTicket
    )

    routes.get("/ticket", (req, res) => controller.getAllTicketQuote(req, res))
    routes.post('/ticket', (req, res) => controller.createTicketQuote(req, res))
    routes.put('/ticket', (req, res) => controller.putTicketQuote(req, res))
    routes.delete('/ticket', (req, res) => controller.removeTicketQuote(req, res))

    return routes
}