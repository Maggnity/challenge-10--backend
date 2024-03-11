import { account, passengers } from "@prisma/client";

export interface IGetPassengersByUserId {

    execute: (userID: account["id"]) => Promise<{ data: passengers[], results: number }>
}