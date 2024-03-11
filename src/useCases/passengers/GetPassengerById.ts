import { account, passengers } from "@prisma/client";
import { IGetPassengerById } from "./contracts/IGetPassengerById";
import { PassengerRepository } from "../../repository/passengerRepository";

export class GetPassengerById implements IGetPassengerById {

    constructor(readonly passengerRepository: PassengerRepository) { }

    async execute(userID: account["id"], passengerId: passengers["passenger_id"]): Promise<passengers | null> {

        try {

            const response = await this.passengerRepository.getPassengerById(userID, passengerId)

            return response
        } catch (error: any) {
            console.log(error.message)
            return (error.message)
        }
    }
}