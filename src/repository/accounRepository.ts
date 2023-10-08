import { account } from "@prisma/client";
import { prisma } from "../App";
import { IAccountRepository } from "./contracts/IAccountRepository";


export class accountRepository implements IAccountRepository {

    constructor() { }

    async newAccount(data: account): Promise<account | undefined> {

        const response = await prisma.account.create({
            data: {
                id: data.id,
                name: data.name,
                email: data.email,
                surname: data.surname,
                password: data.password
            }
        })

        return response
    }

    async findAccountById(id: string): Promise<account | null> {

        const response = await prisma.account.findUnique({
            where: { id }
        })

        return response
    }

    async findAccountByEmail(email: string): Promise<account | null> {

        const response = await prisma.account.findUnique({
            where: {email}
        })
        return response
    }
}