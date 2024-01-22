import { points_program } from "@prisma/client";
import { IGetterUseCases } from "../../IUseCases";

export interface IGetPointsProgram  extends IGetterUseCases<points_program[]> {}