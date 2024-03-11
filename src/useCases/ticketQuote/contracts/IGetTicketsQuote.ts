import { account, ticket_quote } from "@prisma/client";
import { Params } from "../../../types/params";

export interface IGetTicketsQuote {

    execute: (userID: account['id'], params: Params<ticket_quote>) => Promise<{ data: ticket_quote[], results: number }>

}