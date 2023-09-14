import { rejects } from "assert"
import { resolve } from "path"
import { IAccountService } from "./contracts/IAccountService"
import { accountRepository } from "../../repository/accounRepository"
import { v4 as uuidv4 } from 'uuid'
import { account } from "@prisma/client"
import { Account } from "../../Entities/Account"
import { IAccountRepository } from "../../repository/contracts/IAccountRepository"


export class AccountService implements IAccountService {

    constructor(
        private accountRepository: IAccountRepository    ) { }


    async newAccount(newAccount: Account): Promise<account | undefined> {

        try {

            const id = uuidv4()
            const data = { ...newAccount, id }

            const accountAlreadExist = await this.getAccountByEmail(newAccount.email)

            if(accountAlreadExist) throw Error("O e-mail já existe!")

            const r = await this.accountRepository.newAccount(data)

            console.log("🚀 ~ file: AccountService.ts:23 ~ AccountService ~ newAccount ~ r:", r);


            return r

        } catch (error) {

            console.log("🚀 ~ file: AccountService.ts:25 ~ AccountService ~ createAccount ~ error:", error);
            return error.message
        }
    }

    async getAccountByEmail(email: string): Promise<account | null> {


        const account = await this.accountRepository.findAccountByEmail(email)

        return account
    }
    async getAccountById(id: string): Promise<account | null> {


        const account = await this.accountRepository.findAccountById(id)

        return account
    }
}