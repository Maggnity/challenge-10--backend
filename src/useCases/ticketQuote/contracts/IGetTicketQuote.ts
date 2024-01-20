import { account, ticket_quote } from "@prisma/client";

export interface IGetTicketQuote {

    execute: (userID: account['id']) => Promise<{ data: ticket_quote[], results: number }>

}