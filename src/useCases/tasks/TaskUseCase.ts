import { tasks } from "@prisma/client";
import { Category } from "../../Entities/Category";
import { Task, TaskDTO } from "../../Entities/Tasks";
import { CategoryRepository } from "../../repository/CategoryRepository";
import { TaskRepository } from "../../repository/TaskRepository";
import { ITasks } from "./contract/ITasks";

export class Tasks implements ITasks {

    constructor(
        private taskRepository: TaskRepository,
        private categoryRepository: CategoryRepository
    ) { }

    async getTasks() {

        const response: { task: tasks, category: Category | null }[] = []
        const tasks = await this.taskRepository.getTasks()

        for (const task of tasks.data) {

            const assignedCategory = await this.categoryRepository.getAssignedCategory(task.id)

            response.push({ task, category: assignedCategory })
        }
        return { data: response, results: response.length }

    }

    async createTask(data: Partial<tasks>) {

        if (data.endDate && data.startDate && data.endDate <= data.startDate) throw new Error("Data inválida")

        const r = await this.taskRepository.postTask(data)

        if (data.category) {

            console.log("🚀 ~ file: TaskUseCase.ts:42 ~ Tasks ~ createTask ~ data.category:", data.category);

            const taskId = r.id

            const categoryResponse = await this.assignCategory(taskId, data.category)

            console.log("🚀 ~ file: TaskUseCase.ts:46 ~ Tasks ~ createTask ~ categoryResponse:", categoryResponse);

        }

        if (data.status) {
            const taskId = r.id

            const statusResponse = await this.assignStatus(taskId, data.status)
        }
        console.log("🚀 ~ file: TaskUseCase.ts:23 ~ Tasks ~ createTask ~ r:", r);

        return r
    }

    async updateTask(data: Partial<tasks>) {
        if (data.endDate && data.startDate && data.endDate <= data.startDate) throw new Error("Data inválida")

        const r = await this.taskRepository.putTask(data)

        if (data.category) {

            const taskId = data.id

            const categoryResponse = await this.assignCategory(taskId, data.category)

        }

        if (data.status) {
            const taskId = r.id

            const statusResponse = await this.assignStatus(taskId, data.status)
        }

        return r
    }
    async deleteTask(id: number) {

        if (!id) throw Error("Id inválido")

        const r = await this.taskRepository.deleteTask(id)

        return r
    }

    async assignCategory(taskId: Task["id"], categoryId: Category["id"]) {

        if (!categoryId) throw Error("categoria inválida")
        if (!taskId) throw Error("tarefa inválida")

        const r = await this.categoryRepository.subscribeCategory(taskId, categoryId)

        return
    }
    async assignStatus(taskId: Task["id"], statusId: number) {

        if (!taskId) throw Error("Tarefa não identificada")

        const r = await this.taskRepository.subscribeStatus(statusId, taskId)

        return r
    }
}