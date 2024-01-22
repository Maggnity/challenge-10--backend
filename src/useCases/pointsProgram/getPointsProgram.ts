import { IPointsProgramRepository } from "../../repository/contracts/IPointsProgramRepository";
import { Params } from "../../types/params";
import { IGetPointsProgram } from "./contracts/IGetPointsProgram";

export class GetPointsProgram implements IGetPointsProgram {

    constructor(
        private pointsProgramRepository: IPointsProgramRepository
    ) { }

    async execute(userID: string, params?: Params | undefined): Promise<{ id: number; program_name: string; }[]> {

        const response = await this.pointsProgramRepository.getPointsPrograms(userID, params)

        return response
    }
}