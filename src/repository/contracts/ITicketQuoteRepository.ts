import { account, ticket_quote } from "@prisma/client"
import { Params } from "../../types/params"

export interface ITicketQuoteRepository {

    getaAllTickets: (userID: account["id"], params: Params<ticket_quote>) => Promise<{ data: ticket_quote[], results: number }>
    getTicketQuoteById: (id: account["id"]) => Promise<ticket_quote | null>
    postTicket: (userID: account["id"], data: ticket_quote) => Promise<ticket_quote>
    updateTicket: (userID: account["id"], data: ticket_quote) => Promise<ticket_quote>
    deleteTicket: (userID: account["id"], ticketID: ticket_quote["id"]) => Promise<void>


}