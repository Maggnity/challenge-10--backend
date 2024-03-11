import { account, passengers } from "@prisma/client";

export interface IGetPassengerByCpf {

    execute: (userID: account["id"], passengerCpf: passengers["passenger_cpf"]) => Promise<passengers | null>
}