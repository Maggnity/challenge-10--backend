import { account } from "@prisma/client";
import { Account } from "../../../Entities/Account";

export class IAccountService {
    newAccount: (data: Account) => Promise<account | undefined>
}

