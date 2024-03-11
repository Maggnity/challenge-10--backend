import { z } from "zod";
import BaseController from "../BaseController";
import express from "express"
import { CreatePassengerUseCase } from "../../useCases/passengers/CreatePassenger";
import { GetPassengerById } from "../../useCases/passengers/GetPassengerById";
import { GetPassengersByUserId } from "../../useCases/passengers/GetPassengersByUserId";

export class PassengerController extends BaseController {

    constructor(
        private createPassengerUseCase: CreatePassengerUseCase,
        private getPassengerByIdUseCase: GetPassengerById,
        private getPassengersByUserIdUseCase: GetPassengersByUserId,
    ) { super() }

    async createPassenger(req: express.Request, res: express.Response) {

        try {
            const data = z.object({
                passengerName: z.string(),
                passengerEmail: z.string(),
                passengerBirthday: z.date(),
                passengerPhone: z.string(),
                passengerCPF: z.string()

            }).parse(req.body)

            const userID = req.headers.userid as string
            const response = await this.createPassengerUseCase.execute(userID, data)
            super.ok(res, response)
            return response

        } catch (error) {
            console.log({ error });
            super.fail(res, error)
        }
    }

    async getPassengerById(req: express.Request, res: express.Response) {

        try {

            const userID = req.headers.userid as string
            const passengerID = z.string().parse(req.params.passenger_id)

            const response = await this.getPassengerByIdUseCase.execute(userID, passengerID)

            super.ok(res, response)
        } catch (error) {
            super.fail(res, error)

        }
    }
    async getPassengersByUserId(req: express.Request, res: express.Response) {

        try {

            const userID = req.headers.userid as string

            const response = await this.getPassengersByUserIdUseCase.execute(userID)

            super.ok(res, response)
        } catch (error) {
            super.fail(res, error)

        }
    }
}