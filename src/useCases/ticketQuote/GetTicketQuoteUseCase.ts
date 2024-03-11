import { IGetTicketQuote } from "./contracts/IGetTicketQuote";
import { ticket_quote } from "@prisma/client";
import { ITicketQuoteRepository } from "../../repository/contracts/ITicketQuoteRepository";

export class GetTicketQuoteUseCase implements IGetTicketQuote {

    constructor(
        private ticketQuoteRepository: ITicketQuoteRepository
    ) { }


    async execute(id: ticket_quote["id"]): Promise<ticket_quote | null> {

        try {

            const response = await this.ticketQuoteRepository.getTicketQuoteById(id)

            return response


        } catch (error: any) {
            console.log(error.message)
            return error.message
        }
    }
}