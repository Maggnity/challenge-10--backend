import { account, ticket_quote } from "@prisma/client";
import express from 'express'


export interface IPostTicketQuote {

    execute: (userID: account["id"], data: Partial<ticket_quote>) => Promise<ticket_quote>

}