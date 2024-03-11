import { account, seller_offers } from "@prisma/client";

export interface IPostSellerOffer {

    execute: (userID: account["id"], data: Partial<seller_offers>) => Promise<seller_offers | string[]>
}