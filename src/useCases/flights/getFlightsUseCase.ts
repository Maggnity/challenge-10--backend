import { latam_flights } from "@prisma/client";
import { ILatamRepository } from "../../repository/contracts/ILatamRepository";
import { Params } from "../../types/params";
import { IGetterUseCases } from "../IUseCases";
import { IGetFlights, getParams } from "./contracts/IGetFlightsUseCase";

export class GetFlightsUseCase implements IGetFlights {

  constructor(
    private latamRepository: ILatamRepository
  ) { }

  async execute(userID: string, params: Params<latam_flights>): Promise<{data: latam_flights[], results: number}> {

    const {data, results} = await this.latamRepository.getFlights(params)

    return { data, results }
  }
}