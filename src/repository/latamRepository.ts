import { latam_flights } from "@prisma/client";
import { prisma } from "../App";
import { ILatamRepository } from "./contracts/ILatamRepository";
import { Params } from "../types/params";


export class LatamRespository implements ILatamRepository {

    constructor() { }

    async getFlights(params: Params<latam_flights>) {

        console.log({ repParams: params })

        const arrival = params.filters?.destinatition_arrival?.slice(0, 10)
        const deperture = params.filters?.origin_departure?.slice(0, 10)
        console.log({arrival, deperture})

        const response = await prisma.latam_flights.findMany({
            where: {
                origin_iata_code: params.filters?.origin_iata_code,
                destination_iata_code: params.filters?.destination_iata_code,
                destinatition_arrival: {
                    startsWith:arrival
                },
                origin_departure: {
                    startsWith: deperture,
                    
                }
            },
            take: params.limit,
            skip: params.offset
        })

        const results = await prisma.latam_flights.count({
            where: {
                origin_iata_code: params.filters?.origin_iata_code,
                destination_iata_code: params.filters?.destination_iata_code,
                destinatition_arrival: {
                    contains: params.filters?.destinatition_arrival?.slice(0, 10)
                },
                origin_departure: {
                    contains: params.filters?.origin_departure?.slice(0, 10)
                }
            },
        })
        console.log({ response })

        return {
            data: response,
            results
        }
    }
}