import { accountRepository } from "../repository/accounRepository"
import { AccountService } from "../useCases/accountService/AccountService"

const accountRepo = new accountRepository()
const accountService = new AccountService(accountRepo)

test("Deve existir um account service", () => {
    expect(accountService).toBeDefined()
})

test("Deve criar um account com id", async () => {
    
    const data = {
        name: "John Doe",
        email: `john.doe${new Date()}@mail.com`
    }

    const output = await accountService.newAccount(data)

    console.log("🚀 ~ file: AccountService.test.ts:20 ~ test ~ output:", output);

    
    expect(output?.id).toBeDefined()
    expect(output?.id).not.toBe(null)
})

test("O e-mail deve ser único", async () => {
    const data = {
        name: "John Doe",
        email: `john.doe${new Date()}@mail.com`
    }

    const firstCreate = await accountService.newAccount(data)

    expect(firstCreate?.email).toBe(data.email)
    expect(firstCreate?.name).toBe(data.name)

    const output = await accountService.newAccount(data) 

    expect(output).toBe("O e-mail já existe!")
    
    
})
test("Deve ser possível buscar pelo e-mail", async () => {
    const data = {
        name: "John Doe",
        email: `john.doe${new Date}@mail.com`
    }

    const insertFirstMail = await accountService.newAccount(data)

    const output = await accountService.getAccountByEmail(data.email) 

    expect(output?.name).toBe(data.name)
    expect(output?.email).toBe(data.email)
    
    
})


// Deve ser possível buscar pelo e-mail
// Deve ser possível buscar pelo id
// Deve ser possível buscar pelo id