import { ITicketQuoteRepository } from "../../repository/contracts/ITicketQuoteRepository";
import { IPostTicketQuote } from "./contracts/IPostTicketQuote";
import { account, ticket_quote } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid'

export class PostTicketQuoteUseCase implements IPostTicketQuote {

    constructor(
        private ticketQuoteRepository: ITicketQuoteRepository
    ) {}
    
    async execute(userID: account["id"], data: Partial<ticket_quote>): Promise<ticket_quote> {

        data.id = uuidv4() as string

        if(!data.id) throw Error("invalid data")

        //@ts-ignore
        const response = await this.ticketQuoteRepository.postTicket(userID, data)

        return response
    }

}
