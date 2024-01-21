import { z } from "zod";
import { IDeleteTicketQuote } from "../../useCases/ticketQuote/contracts/IDeleteTicketQuote";
import { IGetTicketQuote } from "../../useCases/ticketQuote/contracts/IGetTicketQuote";
import { IPostTicketQuote } from "../../useCases/ticketQuote/contracts/IPostTicketQuote";
import { IUpdateTicketQuote } from "../../useCases/ticketQuote/contracts/IUpdateTcketQuote";
import BaseController from "../BaseController";
import express from 'express'
import { ticket_quote } from "@prisma/client";
import { Params } from "../../types/params";

export class TicketQuoteController extends BaseController {


    constructor(

        private getTicketQuote: IGetTicketQuote,
        private postTicketQuote: IPostTicketQuote,
        private updateTicketQuote: IUpdateTicketQuote,
        private deleteTicketQuote: IDeleteTicketQuote,
    ) {
        super()
    }

    async getAllTicketQuote(req: express.Request, res: express.Response) {
        try {
            const userID = req.headers.userid as string
            if (!userID) throw Error("usuário inválido")
            
            const params: Params = {
                limit: Number(req.query.limit),
                offset: Number(req.query.offset),
                filters: req.query.filters
            }
            
            const response = await this.getTicketQuote.execute(userID, params)

            console.log(response)

            super.ok(res, response)

        } catch (error) {
            super.fail(res, error)

        }
    }
    async createTicketQuote(req: express.Request, res: express.Response) {

        try {

            const userID = req.headers.userid as string

            const data = z.object({
                ticket_origin: z.string(),
                ticket_origin_date: z.date(),
                ticket_destiny: z.optional(z.string()),
                ticket_destiny_date: z.optional(z.date()),
                adults: z.number(),
                childrens: z.number(),
            }).parse({
                ...req.body,
                ticket_origin_date: req.body.ticket_origin_date ? new Date(req.body.ticket_origin_date) : null,
                ticket_destiny_date: req.body.ticket_destiny_date ? new Date(req.body.ticket_destiny_date) : undefined,
                adults: Number(req.body.adults),
                childrens: Number(req.body.childrens),
            })

            const response = await this.postTicketQuote.execute(userID, data)

            super.ok(res, response)
        } catch (error) {
            super.fail(res, error)

        }
    }
    async putTicketQuote(req: express.Request, res: express.Response) {

        try {

            const userID = req.headers.userid as string

            const data = z.object({
                ticket_origin: z.string(),
                ticket_origin_date: z.date(),
                ticket_destiny: z.string(),
                ticket_destiny_date: z.date(),
                adults: z.number(),
                cildrens: z.number(),
            }).parse(req.body)

            const response = await this.updateTicketQuote.execute(userID, data)

            super.ok(res, response)
        } catch (error) {
            super.fail(res, error)
        }
    }
    async removeTicketQuote(req: express.Request, res: express.Response) {

        try {

            const userID = req.headers.userid as string

            const ticketID = z.string().parse(req.body.ticketID)

            const response = await this.deleteTicketQuote.execute(userID, ticketID)

            super.ok(res, response)
        } catch (error) {

            super.fail(res, error)
        }
    }
}