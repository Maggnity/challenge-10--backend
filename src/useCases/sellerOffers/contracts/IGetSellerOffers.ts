import { account } from "@prisma/client";
import { Params } from "../../../types/params";

export interface IGetSellerOffers {

    execute: (userID: account["id"], params: Params) => Promise<{data: any[], results: number}>
}