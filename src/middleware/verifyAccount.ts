import express from "express";
import jwt from "jsonwebtoken"

export class VerifyJWT {

    constructor() { }

    verifyToken(req: express.Request, res: express.Response) {
        
        const token = req.headers.authorization;
        const secretKey = 'secreto';
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