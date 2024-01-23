import { account } from "@prisma/client";
import { Params } from "../../types/params";
import { request } from "../../types/request";
import { response } from "../../types/response";
import { IGetPointsProgram } from "../../useCases/pointsProgram/contracts/IGetPointsProgram";
import BaseController from "../BaseController";

export default class PointsProgramController extends BaseController {

    constructor(

        private getPointsProgramsUseCase: IGetPointsProgram

    ) { super() }

    async getPointsPrograms(req: request, res: response) {

        try {

            const userID = req.headers.userid as account["id"]

            const filtersAsString = req.query.filters
            const filtersAsJson = typeof filtersAsString === "string" ? JSON.parse(filtersAsString) : req.query.filters;
            
            const filters = req.query.filters;

            const params: Params = {
                limit: Number(req.query.limit),
                offset: Number(req.query.offset),
                filters: filtersAsJson
            }

            const response = await this.getPointsProgramsUseCase.execute(userID, params)

            super.ok(res, response)

        } catch (error) {
            super.fail(res, error)
        }
    }
}