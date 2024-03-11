import { account, passengers } from "@prisma/client";
import { PassengerRepository } from "../../repository/passengerRepository";
import { IGetPassengerByCpf } from "./contracts/IGetPassengerByCpf";

export class GetPassengerByCpf implements IGetPassengerByCpf {

    constructor(readonly passengerRepository: PassengerRepository) { }

    async execute(userID: account["id"], passengerCpf: passengers["passenger_cpf"]): Promise<passengers | null> {

        try {

            const response = await this.passengerRepository.getPassengerByCpf(userID, passengerCpf)

            return response
        } catch (error: any) {
            console.log(error.message)
            return (error.message)
        }
    }
}