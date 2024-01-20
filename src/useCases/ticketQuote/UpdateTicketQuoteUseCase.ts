import { ITicketQuoteRepository } from "../../repository/contracts/ITicketQuoteRepository";
import { account, ticket_quote } from "@prisma/client";
import { IUpdateTicketQuote } from "./contracts/IUpdateTcketQuote";

export class UpdateTicketQuoteUseCase implements IUpdateTicketQuote {

    constructor(
        private ticketQuoteRepository: ITicketQuoteRepository
    ) {}
    
    async execute(userID: account["id"], data: Partial<ticket_quote>): Promise<ticket_quote> {

        if(!data.id) throw Error("Invalid ID")

        //@ts-ignore
        const response = await this.ticketQuoteRepository.updateTicket(userID, data)

        return response
    }

}