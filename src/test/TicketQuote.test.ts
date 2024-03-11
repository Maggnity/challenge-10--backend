import { ticket_quote } from "@prisma/client"
import { PostTicketQuoteUseCase } from "../useCases/ticketQuote/PostTicketQuoteUseCase"
import { TicketQuoteRepository } from "../repository/ticketQuoteRepository"
import { GetTicketQuotesUseCase } from "../useCases/ticketQuote/GetTicketQuotesUseCase"
import { GetTicketQuoteUseCase } from "../useCases/ticketQuote/GetTicketQuoteUseCase"

const ticketQuote: Partial<ticket_quote> = {
    adults: 1,
    childrens: 0,
    created_at: new Date(),
    one_way: true,
    ticket_origin: "FLN",
    ticket_destination: "BSB",
    ticket_destination_date: new Date(),
    ticket_origin_date: new Date(),
    updated_at: null
}

const tiquetQuoteRepo = new TicketQuoteRepository
const postTicketQuote = new PostTicketQuoteUseCase(tiquetQuoteRepo)
const getTicketQuotes = new GetTicketQuotesUseCase(tiquetQuoteRepo)
const getTicketQuote = new GetTicketQuoteUseCase(tiquetQuoteRepo)

let generatedId: ticket_quote["id"]

test("Deve criar um ticket quote", async () => {

    const response = await postTicketQuote.execute("teste", ticketQuote)

    expect(response.id).toBeDefined()

    expect(response.status).toBe("created")

    expect(response.adults).toBe(ticketQuote.adults)
    expect(response.childrens).toBe(ticketQuote.childrens)

    generatedId = response.id
})

test("Deve ser possível localizar todas as cotações", async () => {

    const response = await getTicketQuotes.execute("teste", {
        limit: 20,
        offset: 0,
    })

    expect(response).toHaveProperty("data")
    expect(response).toHaveProperty("results")

})

test("Deve ser possível encontrar cotação pelo ID", async () => {

    const response = await getTicketQuote.execute(generatedId)

    console.log(response)

    expect(response?.id).toBe(generatedId)

})