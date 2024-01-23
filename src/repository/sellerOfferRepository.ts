import { account, seller_offers } from "@prisma/client";
import { prisma } from "../App";
import { Params } from "../types/params";
import { ISellerOffersRepository } from "./contracts/ISellerOfferRepository";

export class SellerOfferRepository implements ISellerOffersRepository {

    constructor() { }


    async getAllSellerOffers(userID: string, params: Params): Promise<{ data: seller_offers[]; results: number; }> {

        const filters = params.filters

        console.log({filters})

        const response = await prisma.seller_offers.findMany({
            where: {
                user_id: userID
            },
            take: params.limit,
            skip: params.offset,
            orderBy: {
                created_at: filters.created_at
            }
        })

        const results = await prisma.seller_offers.count({
            where: {
                user_id: userID
            }
        })

        return {
            data: response,
            results
        }



    }


    async createSellerOffer(userID: account["id"], data: Partial<seller_offers>) {

        if(!data.id) throw Error("Falha ao gerar ID.")

        const response = await prisma.seller_offers.create({

            data: {
                user_id: userID,
                miles_value: data.miles_value,
                monetary_value: data.monetary_value,
                program: data.program,
                created_at: data.created_at,
                id: data.id
            }
        })

        return response
    }
}