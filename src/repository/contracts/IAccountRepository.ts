import { account } from "@prisma/client"


export class IAccountRepository {
    newAccount: (data: account) =>  Promise<account | undefined>
    findAccountById: (id: string) =>  Promise<account | null>
    findAccountByEmail: (email: string) =>  Promise<account | null>
}