import { account, seller_offers } from "@prisma/client";
import { ISellerOffersRepository } from "../../repository/contracts/ISellerOfferRepository";
import { IPostSellerOffer } from "./contracts/IPostSellerOffers";
import { v4 as uuidv4 } from 'uuid'

export class PostSellerOffer implements IPostSellerOffer {


    constructor(
        private sellerOfferRepository: ISellerOffersRepository
    ) { }

    async execute(userID: account["id"], data: Partial<seller_offers>) {

        try {

            data.id = uuidv4()
            data.created_at = new Date()
            data.status = 'created'
            
            const errors: string[] = []


            if (!data.miles_value) errors.push("Defina uma quantidade de milhas!")
            if (!data.monetary_value) errors.push("Defina o valor do milheiro!")
            if (!data.program) errors.push("Defina um programa!")

            if (errors.length > 0) throw Error(errors[0])

            const response = await this.sellerOfferRepository.createSellerOffer(userID, data)
            console.log({ id: data.id })
            return response
        } catch (error: any) {
            console.log(error)
            return error.message 
        }
    }   
}