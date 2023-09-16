import { tasks } from "@prisma/client";
import { TaskRepository } from "../../repository/TaskRepository";
import { ITasks } from "./contract/ITasks";

export class Tasks implements ITasks {

    constructor(
        private taskRepository: TaskRepository,
    ) { }

    async getTasks() {

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