import { IGetTicketQuote } from "./contracts/IGetTicketQuote";
import { account, ticket_quote } from "@prisma/client";
import { ITicketQuoteRepository } from "../../repository/contracts/ITicketQuoteRepository";

export class GetTicketQuoteUseCase implements IGetTicketQuote {

    constructor(
        private ticketQuoteRepository: ITicketQuoteRepository
    ) {}


    async execute(userID: account["id"]): Promise<{ data: ticket_quote[], results: number }> {

        const response = await this.ticketQuoteRepository.getaAllTickets(userID)

        return response
    }
}