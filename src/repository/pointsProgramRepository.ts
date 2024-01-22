import { IPointsProgramRepository } from "./contracts/IPointsProgramRepository";
import { prisma } from "../App";
import { account } from "@prisma/client";
import { Params } from "../types/params";

export class PointsProgramRepository implements IPointsProgramRepository {


    constructor() { }


    async getPointsPrograms(userID?: account["id"], params?: Params) {

        const response = await prisma.points_program.findMany()

        return response


    }
}