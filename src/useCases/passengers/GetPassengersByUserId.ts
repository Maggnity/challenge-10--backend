import { account, passengers } from "@prisma/client";
import { PassengerRepository } from "../../repository/passengerRepository";
import { IGetPassengersByUserId } from "./contracts/IGetPassengersByUserId";

export class GetPassengersByUserId implements IGetPassengersByUserId {

    constructor(readonly passengerRepository: PassengerRepository) { }

    async execute(userID: account["id"]): Promise<{data: passengers[], results: number }> {

        try {

            const response = await this.passengerRepository.getPassengersByUserId(userID)

            return response

        } catch (error: any) {
            console.log(error.message)
            return (error.message)
        }
    }
}