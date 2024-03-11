import { Router } from "express";
import { PassengerController } from "../controller/passenger/PassengerController";
import { CreatePassengerUseCase } from "../useCases/passengers/CreatePassenger";
import { GetPassengersByUserId } from "../useCases/passengers/GetPassengersByUserId";
import { GetPassengerById } from "../useCases/passengers/GetPassengerById";
import { PassengerRepository } from "../repository/passengerRepository";
import express from "express";

export function passengerRouter() {



    const routes = Router()

    const repo = new PassengerRepository()

    const createPassenger = new CreatePassengerUseCase(repo)
    const getPassengersByUserId = new GetPassengersByUserId(repo)
    const getPassengerById = new GetPassengerById(repo)

    const controller = new PassengerController(createPassenger, getPassengerById, getPassengersByUserId)


    routes.post("/passenger", (req: express.Request, res: express.Response) => controller.createPassenger(req, res))

    routes.get("/passenger/{:userID}", (req: express.Request, res: express.Response) => controller.getPassengersByUserId(req, res))

    return routes
}