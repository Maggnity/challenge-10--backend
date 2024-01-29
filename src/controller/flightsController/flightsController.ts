import { account, latam_flights } from "@prisma/client";
import { IGetFlights } from "../../useCases/flights/contracts/IGetFlightsUseCase";
import BaseController from "../BaseController";
import express from "express";
import { Params } from "../../types/params";

export class FlightsController extends BaseController {

    constructor(
        private getFlightsUseCase: IGetFlights
    ) { super() }

    async getFlights(req: express.Request, res: express.Response) {


        try {

            const params: Params<latam_flights> = {
                limit: 20,
                offset: 0,
                filters: JSON.parse(req.query.filters as string)
            }

            console.log(params)

            const userID = req.headers.userid as account["id"]

            if (!userID) throw Error('Falha ao autenticar usuário!')

            const response = await this.getFlightsUseCase.execute(userID, params)


            super.ok(res, response)

        } catch (error) {

            console.log({error});

            super.fail(res, error)

        }
    }
}