import { session } from "@prisma/client";

export interface ISessionRepository {

    newSession: (id: string, email: string, token: string) => Promise<session> 

}