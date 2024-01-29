import { account, seller_offers } from "@prisma/client";
import { ISellerOffersRepository } from "../../repository/contracts/ISellerOfferRepository";
import { IGetSellerOffers } from "./contracts/IGetSellerOffers";
import { Params } from "../../types/params";

export default class GetSellerOffers implements IGetSellerOffers {

    constructor(
        private sellerOfferRepository: ISellerOffersRepository
    ) {

    }


    async execute(userID: account["id"], params: Params<seller_offers>): Promise<{ data: any[]; results: number; }> {


        const response = await this.sellerOfferRepository.getAllSellerOffers(userID, params)

        console.log("GetSellerOffers  execute  response", response);


        return response
    } 


}