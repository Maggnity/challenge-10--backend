import { account, ticket_quote } from "@prisma/client";
import { Params } from "../../../types/params";

export interface IGetTicketQuote {

    execute: (userID: account['id'], params: Params) => Promise<{ data: ticket_quote[], results: number }>

}