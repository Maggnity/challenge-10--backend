import { account } from "@prisma/client";

export interface Account {
    name: string
    surname: string
    email: string
    password: string
}