import { VerifyJWT } from "../../middleware/verifyAccount";
import { IAccountRepository } from "../../repository/contracts/IAccountRepository";
import { ISessionRepository } from "../../repository/contracts/ISessionRepository";
import { IAuth, Session } from "./contract/IAuth";
import { v4 as uuidv4 } from 'uuid'
import jwt from "jsonwebtoken"

export class Auth implements IAuth {

    constructor(
        private accountRepository: IAccountRepository,
        private sessionRepository: ISessionRepository,
    ) { }

    async execute(email: string, password: string): Promise<Session> {


            const account = await this.accountRepository.findAccountByEmail(email)
            if (!account) throw Error("E-mail não cadastrado")
            if(!password) throw Error("Digite a senha")

            const passwordIsValid = account.password === password

            if (!passwordIsValid) throw new Error("Senha inválida!")
            const secretKey = password
            const id = uuidv4()
            const token = jwt.sign({ 
                userId: account.id }, 
                secretKey, 
                { expiresIn: '1h' }
            );

            const session = await this.sessionRepository.newSession(id, email, token)

            return {
                auth: true,
                data: account,
                token
            }




    }
}

