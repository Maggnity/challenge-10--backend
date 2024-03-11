import { account, passengers } from "@prisma/client";
import { IPassengerRepository } from "./contracts/IPassengerRepository";
import { prisma } from "../App";

export class PassengerRepository implements IPassengerRepository {


    constructor() { }


    async createPassenger(data: passengers): Promise<passengers> {

        const response = await prisma.passengers.create({
            data
        })

        return response
    }


    async deletePassenger(passengerId: string): Promise<void> {

        const response = await prisma.passengers.delete({
            where: {
                passenger_id: passengerId
            }
        })

        return
    }

    async getPassengerById(userID: account["id"], passengerId: string): Promise<passengers | null> {
        const response = await prisma.passengers.findUnique({
            where: {
                passenger_id: passengerId,
                user_id: userID
            }
        })


        return response
    }

    async getPassengersByUserId(userId: string): Promise<{ data: passengers[]; results: number; }> {

        const response = await prisma.passengers.findMany({
            where: {
                user_id: userId
            }
        })


        return { data: response, results: response.length }

    }

    async getPassengerByCpf(userID: account["id"], passengerCpf: string): Promise<passengers | null> {

        const response = await prisma.passengers.findFirst({
            where: {
                passenger_cpf: passengerCpf,
                user_id: userID
            }
        })

        return response
    }

    async updatePassenger(data: passengers): Promise<passengers> {

        const response = await prisma.passengers.update({
            where: { passenger_id: data.passenger_id },
            data
        })

        return response
    }
}