import { account, passengers } from "@prisma/client"

export interface IPassengerRepository {

    createPassenger: (data: passengers) => Promise<passengers>
    updatePassenger: (data: passengers) =>Promise <passengers>
    deletePassenger: (passengerId: passengers["passenger_id"]) => Promise<void>
    getPassengerById: (userID: account["id"], passengerID: passengers["passenger_id"]) => Promise<passengers | null>
    getPassengerByCpf: (userID: account["id"], passengerID: string) => Promise<passengers | null>
    getPassengersByUserId: (userId: account["id"]) => Promise<{data: passengers[], results: number}>

}
