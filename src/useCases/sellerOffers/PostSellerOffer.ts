import { account, seller_offers } from "@prisma/client";
import { ISellerOffersRepository } from "../../repository/contracts/ISellerOfferRepository";
import { IPostSellerOffer } from "./contracts/IPostSellerOffers";
import { v4 as uuidv4 } from 'uuid'

export class PostSellerOffer implements IPostSellerOffer {


    constructor(
        private sellerOfferRepository: ISellerOffersRepository
    ) {}

    async execute(userID: account["id"], data: Partial<seller_offers>) {

        data.id = uuidv4()
        data.created_at = new Date()

        const response = await this.sellerOfferRepository.createSellerOffer(userID, data)

        return response
    }
}