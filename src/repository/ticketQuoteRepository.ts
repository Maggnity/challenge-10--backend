import { account, ticket_quote } from "@prisma/client";
import { prisma } from "../App";
import { ITicketQuoteRepository } from "./contracts/ITicketQuoteRepository";

export class TicketQuoteRepository implements ITicketQuoteRepository {

    constructor(

    ) { }
    async postTicket(userID: account["id"], data: ticket_quote): Promise<ticket_quote> {

        const createdTicket = await prisma.ticket_quote.create({
            data: {
                id: data.id,
                user_id: userID,
                adults: data.adults,
                childrens: data.childrens,
                one_way: data.one_way,
                ticket_destiny: data.ticket_destiny,
                ticket_origin: data.ticket_origin,
                ticket_destiny_date: data.ticket_destiny_date,
                ticket_origin_date: data.ticket_origin_date,
                created_at: new Date(),
            }
        })

        return createdTicket

    }


    async updateTicket(userID: account["id"], data: ticket_quote): Promise<ticket_quote> {

        const updatedTicket = await prisma.ticket_quote.update({
            where: {
                id: data.id,
                user_id: userID
            },
            data: {
                adults: data.adults,
                childrens: data.childrens,
                one_way: data.one_way,
                ticket_destiny: data.ticket_destiny,
                ticket_origin: data.ticket_origin,
                ticket_destiny_date: data.ticket_destiny_date,
                ticket_origin_date: data.ticket_origin_date,
                updated_at: new Date()
            }
        })

        return updatedTicket

    }

    async deleteTicket(userID: account["id"], ticketID: ticket_quote["id"]): Promise<void> {
        const deleteTicket = await prisma.ticket_quote.delete({
            where: {
                user_id: userID,
                id: ticketID
            }
        })

        return
    }

    async getaAllTickets(userID: account["id"]): Promise<{ data: any[]; results: number; }> {
        const response = await prisma.ticket_quote.findMany({
            where: {
                user_id: userID
            }
        })
        const results = await prisma.ticket_quote.count({
            where: {
                user_id: userID
            }
        })

        return { data: response, results: results }
    };
}