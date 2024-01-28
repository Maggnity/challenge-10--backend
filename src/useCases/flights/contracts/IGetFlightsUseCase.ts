import { account, latam_flights } from "@prisma/client";
import { IGetterUseCases } from "../../IUseCases";
import { Params } from "../../../types/params";

export type getParams = {

} & Params<latam_flights>

export interface IGetFlights {
    execute: (userID: account["id"], params: getParams) => Promise<{data: latam_flights[], results: number}>
}
