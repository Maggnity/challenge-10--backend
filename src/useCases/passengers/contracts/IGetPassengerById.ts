import { account, passengers } from "@prisma/client";

export interface IGetPassengerById {

    execute: (userID: account["id"], passengerId: passengers["passenger_id"]) => Promise<passengers | null>
}