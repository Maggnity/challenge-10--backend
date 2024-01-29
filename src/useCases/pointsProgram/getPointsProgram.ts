import { points_program } from "@prisma/client";
import { IPointsProgramRepository } from "../../repository/contracts/IPointsProgramRepository";
import { Params } from "../../types/params";
import { IGetPointsProgram } from "./contracts/IGetPointsProgram";

export class GetPointsProgram implements IGetPointsProgram {

    constructor(
        private pointsProgramRepository: IPointsProgramRepository
    ) { }

    async execute(userID: string, params?: Params<points_program>): Promise<points_program[]> {

        const response = await this.pointsProgramRepository.getPointsPrograms(userID, params)

        return response
    }
}