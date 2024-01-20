import { rejects } from "assert"
import { resolve } from "path"
import { IAccountService } from "./contracts/IAccountService"
import { accountRepository } from "../../repository/accounRepository"
import { v4 as uuidv4 } from 'uuid'
import { account } from "@prisma/client"
import { Account } from "../../Entities/Account"
import { IAccountRepository } from "../../repository/contracts/IAccountRepository"
import jwt from "jsonwebtoken"


export class AccountService implements IAccountService {

    constructor(
        private accountRepository: IAccountRepository    ) { }


    async newAccount(newAccount: Account): Promise<account | undefined> {

            const id = uuidv4()
            const data = { ...newAccount, id, verified_email:false }

            const accountAlreadExist = await this.getAccountByEmail(newAccount.email)

            if(accountAlreadExist) throw Error("O e-mail já existe!")

            const r = await this.accountRepository.newAccount(data)
            return r

    }
    /** Function loggIn
     * @function loggIn starts a new user session
     * 
     * @param {string} email user email
     * @param {string} password user passwords
    **/
    async loggIn(email: string, password:string): Promise<any> {
        try {
            
            const account = await this.getAccountByEmail(email)
            
            if(!account) throw Error("erro")
            
            const passwordIsValid = account.password === password
            
            if(!passwordIsValid) throw new Error("Senha inválida!")
            const secretKey = 'secreto';
            const token = jwt.sign({ userId: account.id }, secretKey, { expiresIn: '1h' });


            return account
            
            
        } catch (error: any) {

            console.log("🚀 ~ file: AccountService.ts:56 ~ AccountService ~ loggIn ~ error:", error.message);

            return error
        }

    }

    /** getAccountByEmail
     * @function getAccountByEmail returns user account
     * 
     * @param {string} email user email
     * 
     * @returns {account} account user
    **/
    async getAccountByEmail(email: string): Promise<account | null> {


        const account = await this.accountRepository.findAccountByEmail(email)

        return account
    }


    /** getAccountById
     * @function getAccountByEmail returns user account
     * 
     * @param {string} id user id
     * 
     * @returns {account} account user
    **/
    async getAccountById(id: string): Promise<account | null> {


        const account = await this.accountRepository.findAccountById(id)

        return account
    }


}