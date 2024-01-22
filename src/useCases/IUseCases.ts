import { account } from "@prisma/client";
import { Params } from "../types/params";

export interface IGetterUseCases<T> {
    execute: (userID: account["id"], params?: Params) => Promise<T>
}