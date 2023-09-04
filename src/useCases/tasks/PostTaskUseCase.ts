import { Task, TaskDTO } from "../../Entities/Tasks";
import { db } from "../../database/db";
import { ITaskRepository } from "../../repository/contracts/ITaskRepository";
import { IPostTaskUseCase } from "./contract/IPostTaskUseCase";

export class PostTask implements IPostTaskUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) { }


    async execute(data:TaskDTO): Promise<Task> {
        try {

            const tasks = await this.taskRepository.postTask(data)

            return tasks;

        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            throw error;
        }
    }
}