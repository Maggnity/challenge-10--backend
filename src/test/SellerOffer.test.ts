import { seller_offers } from "@prisma/client"
import { SellerOfferRepository } from "../repository/sellerOfferRepository"
import { PostSellerOffer } from "../useCases/sellerOffers/PostSellerOffer"


const sellerOfferRepository = new SellerOfferRepository()
const postOffer = new PostSellerOffer(sellerOfferRepository)

const data: Partial<seller_offers> = {
    miles_value: 1000,
    monetary_value: 22,
    program: 1,
    user_id: "teste"
}

test("Deve criar uma oferta de venda com status created", async () => {

    const newOffer = await postOffer.execute("test", data)
    console.log(newOffer)

    expect(newOffer["status"]).toBe("created")
    expect(newOffer).toHaveProperty("id")

})

test("Deve lançar erro se não houver 'monetary_value'", async () => {

    const fakeData = {...data, "monetary_value": null}
    const newOffer = await postOffer.execute("test", fakeData)

    console.log(newOffer)
    expect(newOffer).toStrictEqual("Defina o valor do milheiro!")
})  

test("Deve lançar erro se não houver Quantidade de milhas", async () => {

    const fakeData = {...data, "miles_value": null}
    const newOffer = await postOffer.execute("test", fakeData)

    console.log(newOffer)
    expect(newOffer).toStrictEqual("Defina uma quantidade de milhas!")
})  


test("Deve lançar erro se não houver Programa", async () => {

    const fakeData = {...data, "program": null}
    const newOffer = await postOffer.execute("test", fakeData)

    console.log(newOffer)
    expect(newOffer).toStrictEqual("Defina um programa!")
})  

