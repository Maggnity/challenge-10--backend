import { account, ticket_quote } from "@prisma/client";
import { prisma } from "../App";
import { ITicketQuoteRepository } from "./contracts/ITicketQuoteRepository";
import { Params } from "../types/params";

export class TicketQuoteRepository implements ITicketQuoteRepository {

    constructor(

    ) { }
    async postTicket(userID: account["id"], data: ticket_quote): Promise<ticket_quote> {

        const createdTicket = await prisma.ticket_quote.create({
            data: {
                id: data.id,
                status: data.status,
                user_id: userID,
                adults: data.adults,
                childrens: data.childrens,
                one_way: data.one_way,
                ticket_destination: data.ticket_destination,
                ticket_origin: data.ticket_origin,
                ticket_destination_date: data.ticket_destination_date,
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
                ticket_destination: data.ticket_destination,
                ticket_origin: data.ticket_origin,
                ticket_destination_date: data.ticket_destination_date,
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

    async getaAllTickets(userID: account["id"], params: Params<ticket_quote>): Promise<{ data: any[]; results: number; }> {

        const limit = params.limit
        const offset = params.offset
        const filters = params.filters

        const response = await prisma.ticket_quote.findMany({
            where: {
                user_id: userID
            },
            take: limit,
            skip: offset
        })

        console.log({ filters })

        const results = await prisma.ticket_quote.count({
            where: {
                user_id: userID,
                id: filters?.id
            },

        })

        return { data: response, results: results }
    };

    async getTicketQuoteById(id: ticket_quote["id"]): Promise<ticket_quote | null> {
        const response = await prisma.ticket_quote.findUnique({
            where: {
                id
            }
        })

        return response
    }
}