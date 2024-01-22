import { account, points_program } from "@prisma/client";
import { Params } from "../../types/params";

export interface IPointsProgramRepository {

    getPointsPrograms: (userID?: account["id"], params?: Params) => Promise<points_program[]>
}