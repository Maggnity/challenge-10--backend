import { tasks_status } from "@prisma/client";
import { ITaskRepository } from "../../repository/contracts/ITaskRepository";
import { IGetTaskStatusUseCase } from "./contracts/IGetTaskStatusUseCase";

export class GetTaskStatus implements IGetTaskStatusUseCase {

    constructor(
        private taskRepository: ITaskRepository
    ) {}

    async execute(): Promise<{ data: tasks_status[]; results: number; }> {

        const response = await this.taskRepository.getStatusTasks()

        return response
    }
}