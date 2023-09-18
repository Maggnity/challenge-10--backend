import { z } from "zod";
import { IAuth } from "../../useCases/auth/contract/IAuth";
import express from 'express';
import BaseController from "../BaseController";


export class AuthController extends BaseController {

    constructor(
        private auth: IAuth
    ) { super() }


    async login(req: express.Request, res: express.Response) {
        try {
            const data = z.object({
                email: z.string(),
                password: z.string()
            }).parse(req.body)
            const response = await this.auth.execute(data.email, data.password)

            super.ok(res, response)

        } catch (error) {

            console.log("🚀 ~ file: auth.ts:22 ~ AuthController ~ login ~ error:", error);

            super.fail(res, error)

        }
    }
}   