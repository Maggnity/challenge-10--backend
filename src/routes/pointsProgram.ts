import { Router } from "express"
import { request } from "../types/request"
import { response } from "../types/response"
import PointsProgramController from "../controller/pointsProgram/PointsProgramController"
import { GetPointsProgram } from "../useCases/pointsProgram/getPointsProgram"
import { PointsProgramRepository } from "../repository/pointsProgramRepository"

export default function pointsProgramRoutes() {



    const routes = Router()

    const repo = new PointsProgramRepository()
    const getPointsPrograms = new GetPointsProgram(repo)
    const controller = new PointsProgramController(getPointsPrograms)

    routes.get('/points-programs', (req: request , res: response) => controller.getPointsPrograms(req, res))

    return routes
}