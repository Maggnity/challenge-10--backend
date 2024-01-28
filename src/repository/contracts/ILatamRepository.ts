import { latam_flights } from "@prisma/client";
import { Params } from "../../types/params";

export interface ILatamRepository {

    getFlights: (params: Params<latam_flights>) => Promise<{data: latam_flights[], results: number}>
}