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
}