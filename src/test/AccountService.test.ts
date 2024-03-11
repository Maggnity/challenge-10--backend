import { Account } from "../Entities/Account"
import { accountRepository } from "../repository/accounRepository"
import { AccountService } from "../useCases/accountService/AccountService"

const accountRepo = new accountRepository()
const accountService = new AccountService(accountRepo)

const dn = Date.now()

const newAccount: Account = {
    email: `${dn}@mail.com`,
    name: "John Doe",
    password: "123",
    surname: "Doe"
} 

let id;

test("Deve existir um account service", () => {
    expect(accountService).toBeDefined()
})

test("Deve criar um account com id", async () => {

    const output = await accountService.newAccount(newAccount)

    id = output?.id

    expect(output?.id).toBeDefined()
    expect(output?.id).not.toBe(null)
})
test("O e-mail deve ser único", async () => {

    const output = await accountService.newAccount(newAccount)

    console.log({output})

    expect(output).toBe("O e-mail já existe!")
})

test("Deve ser possível buscar pelo e-mail", async () => {

    const output = await accountService.getAccountByEmail(newAccount.email)

    expect(output?.name).toBe(newAccount.name)
    expect(output?.email).toBe(newAccount.email)
})
test("Deve ser possível buscar pelo id", async () => {

    const output = await accountService.getAccountById(id)

    expect(output?.id).toBe(id)
    expect(output?.email).toBe(newAccount.email)
})
