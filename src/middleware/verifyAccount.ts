import express from "express";
import jwt, { Secret } from "jsonwebtoken"
import { ISessionRepository } from "../repository/contracts/ISessionRepository";

export class VerifyJWT {

    constructor(
        private sessionRepository: ISessionRepository
    ) { }

    async verifyToken(req: express.Request, res: express.Response) {
        
        const token = req.headers.authorization;

        console.log("🚀 ~ file: verifyAccount.ts:12 ~ VerifyJWT ~ verifyToken ~ token:", token);

        if(!token ) throw Error("token")

        const session = await this.sessionRepository.getSession
        (token);

        if(!session) throw Error("Faça o login para continuar.") 
        const secretKey = session.token as Secret

        if (!token) {
            return res.status(401).json({ message: 'Token não fornecido' });
        }

        jwt.verify(token, secretKey, (err: any, decoded: any) => {
            if (err) {
                return res.status(401).json({ message: 'Token inválido' });
            }

            res.json({ 
                message: 'Rota protegida acessada com sucesso', 
                user: decoded,
                auth:true
            });
        });
    }

}