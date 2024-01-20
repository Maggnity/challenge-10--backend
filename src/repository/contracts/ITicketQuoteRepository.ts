import { account, ticket_quote } from "@prisma/client"

export interface ITicketQuoteRepository {

    getaAllTickets: (userID: account["id"]) => Promise<{data: any [], results: number}>
    postTicket: (userID: account["id"], data: ticket_quote) => Promise<ticket_quote>
    updateTicket: (userID: account["id"], data: ticket_quote) => Promise<ticket_quote>
    deleteTicket: (userID: account["id"], ticketID: ticket_quote["id"]) => Promise<void>


}