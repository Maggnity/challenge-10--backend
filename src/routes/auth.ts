import { Router } from "express"
import { accountRepository } from "../repository/accounRepository";
import { AuthController } from "../controller/auth/auth";
import { Auth } from "../useCases/auth/auth";
import { sessionRepository } from "../repository/sessionRepository";

export const AuthRoutes = () => {

    const routes = Router();
   
    const accountRepo = new accountRepository();
    const sessionRepo = new sessionRepository();
   
    const auth = new Auth(accountRepo, sessionRepo)
   
    const controller = new AuthController(auth)
    
    routes.post("/auth", (req, res) => controller.login(req, res))

    return routes

}