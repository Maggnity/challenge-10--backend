import { prisma } from "../App";
import { ISessionRepository } from "./contracts/ISessionRepository";

export class sessionRepository implements ISessionRepository {

    constructor() { }

    async newSession(id: string, email: string, token: string) {

        console.log("🚀 ~ file: sessionRepository.ts:10 ~ sessionRepository ~ newSession ~ token:", token.length);


        const response = await prisma.session.create({
            data: {
                id,
                email,
                token
            }
        })
        return response
    }

    async getSession(token: string | undefined) {

    console.log("🚀 ~ file: sessionRepository.ts:25 ~ sessionRepository ~ getSession ~ userId:", token);


        const response = await prisma.session.findFirst({
            //@ts-ignore
            where: {
                token: token
            }
        })

        //todo userId precisa ser unico para pegar esta session
        return response

    }
}