import { tasks_status } from "@prisma/client";
import { ITaskRepository } from "../../repository/contracts/ITaskRepository";
import { IPostTaskStatusUseCase } from "./contracts/IPostTaskStatusUseCase";

export class PostTaskStatus implements IPostTaskStatusUseCase {

    constructor (
        private taskRepository: ITaskRepository
    ) { }


    async execute (userID: string, data: tasks_status) {

        const response = await this.taskRepository.postStatusTask(userID, data)

        return response
    }
}