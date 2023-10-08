import { accountRepository } from "../repository/accounRepository"
import { AccountService } from "../useCases/accountService/AccountService"

const repo = new accountRepository()
const accountService = new AccountService(repo)

test("Deve buscar um usuário com o email fornecido", async () => {

    const email = "john.doe@mail.com"

    const user = await accountService.getAccountByEmail(email)

    expect(user?.email).toBe(email)

})

test("Se o email não possuir registro, deve retornar um erro", async() => {
    const password = "123"
    const email = "john.doesntexists@mail.com"
    const user = await accountService.loggIn(email, password)
    expect(user).toStrictEqual(Error("erro"))
})

test("Deve validar o password", async() => {
    const password = "123"
    const email = "john.doe@mail.com"
    const user = await accountService.loggIn(email, password)
    expect(user.password).toBe(password)

})
test("Deve lançar erro se o password fornecido estiver errado", async() => {
    const password = "1234"
    const email = "john.doe@mail.com"
    const user = await accountService.loggIn(email, password)

    console.log("🚀 ~ file: LogIn.test.ts:36 ~ test.only ~ user:", user);

    expect(user).toStrictEqual(Error("Senha inválida!"))

})