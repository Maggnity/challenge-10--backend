import { account, ticket_quote } from "@prisma/client";
import express from 'express'


export interface IUpdateTicketQuote {

    execute: (userID: account["id"], data: Partial<ticket_quote>) => Promise<ticket_quote>

}