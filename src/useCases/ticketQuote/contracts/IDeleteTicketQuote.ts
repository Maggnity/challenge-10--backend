import { account, ticket_quote } from '@prisma/client'
import express from 'express'

export interface IDeleteTicketQuote {

    execute: (userID: account["id"], ticketID: ticket_quote["id"]) => Promise<void>


}