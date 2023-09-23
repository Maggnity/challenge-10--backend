import { session } from "@prisma/client";

export interface ISessionRepository {

    newSession: (id: string, email: string, token: string) => Promise<session> 

    getSession: (token: string) => Promise<session | null>
}