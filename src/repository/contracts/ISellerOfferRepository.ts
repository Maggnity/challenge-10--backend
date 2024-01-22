import { account, seller_offers } from "@prisma/client";
import { Params } from "../../types/params";

export interface ISellerOffersRepository {


    getAllSellerOffers: (userID: account["id"], params: Params) => Promise<{data: seller_offers[] , results: number}>

    createSellerOffer: (userID: account["id"], params: Partial<seller_offers>) => Promise<seller_offers>

}