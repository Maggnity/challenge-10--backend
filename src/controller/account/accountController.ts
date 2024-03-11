import { z } from "zod";
import BaseController from "../BaseController";
import express from 'express'
import { IAccountService } from "../../useCases/accountService/contracts/IAccountService";

export class accountController extends BaseController {

    constructor(
        private accountServiseUseCase: IAccountService
    ) { super() }



    async newAccount(req: express.Request, res: express.Response) {
        try {
            
            const data = z.object({
                name: z.string(),
                email: z.string(),
                password: z.string(),
                surname: z.string()
            }).parse(req.body)

            console.log({body: req.body})


            const response = await this.accountServiseUseCase.newAccount(data)

            console.log(response)

            super.ok(res, response)
            
        } catch (error: any) {
            console.log(error.message)
            super.fail(res, error)
            return error
        }
    }
}