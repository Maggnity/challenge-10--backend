import { tasks } from "@prisma/client";
import { TaskRepository } from "../../repository/TaskRepository";
import { ITasks } from "./contract/ITasks";
import { Category } from "../../Entities/Category";

export class Tasks implements ITasks {

    constructor(
        private taskRepository: TaskRepository,
    ) { }

    async getTasks(categories: Category[]) {

        if (categories) {
            const tasks: tasks[] = []
            let result = 0
            
            for (const category of categories) {
                const filteredResponse = await this.taskRepository.getTasks(category.id)

                for(const task of filteredResponse.data ){

                    tasks.push(task)
                }
                result = filteredResponse.results++
            }
            console.log("🚀 ~ file: TaskUseCase.ts:17 ~ Tasks ~ getTasks ~ tasks:", tasks);
            return ({data: tasks, results: tasks.length})

        }

        const tasks = await this.taskRepository.getTasks()
        return { data: tasks.data, results: tasks.data.length }

    }
    async createTask(data: Partial<tasks>) {

        if (data.endDate && data.startDate && data.endDate <= data.startDate) throw new Error("Data inválida")

        const r = await this.taskRepository.postTask(data)

        return r
    }
    async updateTask(data: Partial<tasks>) {
        if (data.endDate && data.startDate && data.endDate <= data.startDate) throw new Error("Data inválida")

        const r = await this.taskRepository.putTask(data)

        return r
    }
    async deleteTask(id: number) {

        if (!id) throw Error("Id inválido")

        const r = await this.taskRepository.deleteTask(id)

        return r
    }
}