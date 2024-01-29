import { IPointsProgramRepository } from "./contracts/IPointsProgramRepository";
import { prisma } from "../App";
import { account, points_program } from "@prisma/client";
import { Params } from "../types/params";

export class PointsProgramRepository implements IPointsProgramRepository {


    constructor() { }


    async getPointsPrograms(userID?: account["id"], params?: Params<points_program>) {

        const response = await prisma.points_program.findMany()

        return response


    }
}