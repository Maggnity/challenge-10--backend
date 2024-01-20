import { ITicketQuoteRepository } from "../../repository/contracts/ITicketQuoteRepository";
import { account, ticket_quote } from "@prisma/client";
import { IDeleteTicketQuote } from "./contracts/IDeleteTicketQuote";

export class DeleteteTicketQuoteUseCase implements IDeleteTicketQuote {

    constructor(
        private ticketQuoteRepository: ITicketQuoteRepository
    ) {}
    
    async execute(userID: account["id"], ticketID: ticket_quote["id"]): Promise<void> {


        const response = await this.ticketQuoteRepository.deleteTicket(userID, ticketID)

        return
    }

}