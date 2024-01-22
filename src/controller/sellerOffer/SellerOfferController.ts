import { account } from "@prisma/client";
import { Params } from "../../types/params";
import { IGetSellerOffers } from "../../useCases/sellerOffers/contracts/IGetSellerOffers";
import BaseController from "../BaseController";
import express from "express";
import { z } from "zod";
import { IPostSellerOffer } from "../../useCases/sellerOffers/contracts/IPostSellerOffers";

export class SellerOfferCotroller extends BaseController {


    constructor(
        private getSellerOffers: IGetSellerOffers,
        private postSellerOffer: IPostSellerOffer
    ) { super() }


    async getAllSellerOffers(req: express.Request, res: express.Response) {

        try {

            const userID = req.headers.userid as account["id"]
            if (!userID) throw Error("usuário inválido")

            const params: Params = {
                limit: Number(req.query.limit),
                offset: Number(req.query.offset),
                filters: req.query.filters
            }

            const response = await this.getSellerOffers.execute(userID, params)

            console.log(response)

            super.ok(res, response)
            
        } catch (error) {
            super.fail(res, error)
        }
    }

    async createSellerOffer(req: express.Request, res: express.Response) {

        const userID = req.headers.userid as account["id"]


        try {
            if (!userID) throw Error("usuário inválido")
            
            const data = z.object({
                monetary_value: z.number(),
                miles_value: z.number(),
                program: z.number(),
            }).parse({
                monetary_value: Number(req.body.monetary_value),
                miles_value: Number(req.body.miles_value),
                program: Number(req.body.program)
            })

            const response = await this.postSellerOffer.execute(userID, data)

            super.ok(res, response)
            
        } catch (error) {
            super.fail(res, error)
            
        }
    }
}