import { PassengerRepository } from "../repository/passengerRepository"
import { CreatePassengerUseCase } from "../useCases/passengers/CreatePassenger"
import { GetPassengerById } from "../useCases/passengers/GetPassengerById"
import { GetPassengersByUserId } from "../useCases/passengers/GetPassengersByUserId"
import { CreatePassengerDTO } from "../useCases/passengers/contracts/ICreatePassenger"


const passengerRepository = new PassengerRepository()
const createPassenger = new CreatePassengerUseCase(passengerRepository)
const getPassengerById = new GetPassengerById(passengerRepository)
const getPassengersByuserId = new GetPassengersByUserId(passengerRepository)

const dn = Date.now()

let newPassenger: CreatePassengerDTO = {
    passengerBirthday: new Date(),
    passengerCPF: `${dn}`,
    passengerEmail: "test@mail.com",
    passengerName: "passageiro teste",
    passengerPhone: "48999999999"
}
let userId = "teste"
let id

test("Deve criar um passageiro", async () => {

    const response = await createPassenger.execute(userId, newPassenger)
    id = response.passenger_id
    expect(response).toHaveProperty("passenger_id")
})

test("O passageiro deve ser único por usuário", async () => {
    const response = await createPassenger.execute(userId, newPassenger)
    id = response.passenger_id
    expect(response).toBe("O CPF do passageiro já existe!")
})

test("Deve buscar um passageiro pelo passenger ID", async () => {

    const response = await getPassengerById.execute(userId, id)
    console.log(response)
    expect(response?.passenger_id).toBe(id)
})

test("Deve buscar passageiros pelo user ID", async () => {

    const response = await getPassengersByuserId.execute(userId)

    expect(response).toHaveProperty("data")
    expect(response).toHaveProperty("results")

    for(const passenger of response.data) {
        expect(passenger.user_id).toBe(userId)
    }
})
