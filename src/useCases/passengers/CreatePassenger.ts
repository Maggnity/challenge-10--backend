import { account, passengers } from "@prisma/client";
import { CreatePassengerDTO, ICreatePassenger } from "./contracts/ICreatePassenger";
import { IPassengerRepository } from "../../repository/contracts/IPassengerRepository";
import { v4 as uuidv4 } from 'uuid'

export class CreatePassengerUseCase implements ICreatePassenger {


    constructor(
        readonly passengerRepository: IPassengerRepository
    ) { }

    async execute(userID: account["id"], input: CreatePassengerDTO): Promise<passengers> {

        try {



            const newPassenger: passengers = {
                active: true,
                created_at: new Date(),
                pasenger_phone: input.passengerPhone,
                passenger_birthday: input.passengerBirthday,
                passenger_cpf: input.passengerCPF,
                passenger_id: uuidv4(),
                passenger_mail: input.passengerEmail,
                passenger_name: input.passengerName,
                user_id: userID,
                updated_at: null
            }

            //if(!CreatePassengerUseCase.validateCPF(input.passengerCPF)) throw Error("CPF inválido!")


            const passengerAlreadyExists = await this.passengerRepository.getPassengerByCpf(userID, newPassenger.passenger_cpf)

            if (passengerAlreadyExists) throw Error("O CPF do passageiro já existe!")

            const response = await this.passengerRepository.createPassenger(newPassenger)

            return response

        } catch (error: any) {
            
            console.log(error.message)

            return error.message
        }
    }

    static validateCPF(cpf: string) {
        cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

        if (cpf.length !== 11 || /^(.)\1*$/.test(cpf)) return false; // Verifica se o CPF tem 11 dígitos e não é uma sequência de números repetidos

        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }

        let remainder = 11 - (sum % 11);
        if (remainder === 10 || remainder === 11) remainder = 0;

        if (remainder !== parseInt(cpf.charAt(9))) return false;

        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }

        remainder = 11 - (sum % 11);
        if (remainder === 10 || remainder === 11) remainder = 0;

        return remainder === parseInt(cpf.charAt(10));
    }
}


// Exemplo de uso:
/* const cpf = "123.456.789-09";
if (validateCPF(cpf)) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
} */