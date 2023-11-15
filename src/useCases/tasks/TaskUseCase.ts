import { tasks } from "@prisma/client";
import { TaskRepository } from "../../repository/TaskRepository";
import { ITasks } from "./contract/ITasks";
import { Category } from "../../Entities/Category";

export class Tasks implements ITasks {

    constructor(
        private taskRepository: TaskRepository,
    ) { }

    async getTasks(userID: string, categories: Category[]) {

        console.log("🚀 ~ file: TaskUseCase.ts:14 ~ Tasks ~ getTasks ~ userID:", userID);


        if (categories) {
            const tasks: tasks[] = []
            let result = 0

            for (const category of categories) {
                const filteredResponse = await this.taskRepository.getTasks(userID, category.id)

                for (const task of filteredResponse.data) {

                    tasks.push(task)
                }
                result = filteredResponse.results++
            }
            console.log("🚀 ~ file: TaskUseCase.ts:17 ~ Tasks ~ getTasks ~ tasks:", tasks);
            return ({ data: tasks, results: tasks.length })

        }

        const tasks = await this.taskRepository.getTasks(userID)

        console.log("🚀 ~ file: TaskUseCase.ts:34 ~ Tasks ~ getTasks ~ tasks:", tasks);


        return { data: tasks.data, results: tasks.data.length }

    }
    async createTask(userID: string, data: Partial<tasks>) {

        if (data.endDate && data.startDate && data.endDate <= data.startDate) throw new Error("Data inválida")

        const r = await this.taskRepository.postTask(userID, data)

        return r
    }
    async updateTask(userID: string, data: Partial<tasks>) {
        if (data.endDate && data.startDate && data.endDate <= data.startDate) throw new Error("Data inválida")

        const r = await this.taskRepository.putTask(userID, data)

        return r
    }
    async deleteTask(userID: string, id: number) {

        if (!id) throw Error("Id inválido")

        const r = await this.taskRepository.deleteTask(userID, id)

        return r
    }
}