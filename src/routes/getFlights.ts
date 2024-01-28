import express, { Router } from "express"
import { FlightsController } from "../controller/flightsController/flightsController"
import { GetFlightsUseCase } from "../useCases/flights/getFlightsUseCase"
import { LatamRespository } from "../repository/latamRepository"

export function flightsRouter() {

    const routes = Router()

    const repo = new LatamRespository() 
    const getFlights = new GetFlightsUseCase(repo) 
    const controller = new FlightsController(getFlights)

    routes.get("/flights", (req: express.Request, res: express.Response) => controller.getFlights(req, res))

    return routes

}