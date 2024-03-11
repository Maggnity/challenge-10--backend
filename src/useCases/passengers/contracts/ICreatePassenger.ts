import { account, passengers } from "@prisma/client"

export interface ICreatePassenger {

    execute: (userID: account["id"], input: CreatePassengerDTO) => Promise<passengers>

}


export type CreatePassengerDTO = {

    passengerName: string,
    passengerBirthday: Date,
    passengerPhone: string,
    passengerEmail: string,
    passengerCPF: string 

} 