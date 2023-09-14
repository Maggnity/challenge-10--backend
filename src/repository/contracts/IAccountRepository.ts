import { account } from "@prisma/client"
import { Account } from "../../Entities/Account"


export class IAccountRepository {
    newAccount: (data: account) =>  Promise<account | undefined>
    findAccountById: (id: string) =>  Promise<account | null>
    findAccountByEmail: (email: string) =>  Promise<account | null>
}