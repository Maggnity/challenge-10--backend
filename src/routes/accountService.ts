import { Router } from "express";
import { accountRepository } from "../repository/accounRepository";
import { accountController } from "../controller/account/accountController";
import { AccountService } from "../useCases/accountService/AccountService";

export const accountServiceRoutes = () => {


    const routes = Router()

    const repository = new accountRepository()

    const accountService = new AccountService(repository)

    const controller = new accountController(accountService)


    //@ts-ignore

    routes.post("/account-service", (req, res) => controller.newAccount(req, res))

    return routes

}
