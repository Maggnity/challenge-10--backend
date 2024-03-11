import { IGetTicketsQuote } from "./contracts/IGetTicketsQuote";
import { account, ticket_quote } from "@prisma/client";
import { ITicketQuoteRepository } from "../../repository/contracts/ITicketQuoteRepository";
import { Params } from "../../types/params";

export class GetTicketQuotesUseCase implements IGetTicketsQuote {

    constructor(
        private ticketQuoteRepository: ITicketQuoteRepository
    ) { }


    async execute(userID: account["id"], params: Params<ticket_quote>): Promise<{ data: ticket_quote[], results: number }> {

        try {

            const response = await this.ticketQuoteRepository.getaAllTickets(userID, params)

            return response
        } catch (error: any) {
            console.log(error.message)
            return error.message
        }
    }
}