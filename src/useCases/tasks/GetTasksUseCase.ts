import { Task } from "../../Entities/Tasks";
import { IGetTasksUseCase } from "./contract/IGetTasksUseCase";
import { db } from "../../database/db";
import { ITaskRepository } from "../../repository/contracts/ITaskRepository";

export class GetTasks implements IGetTasksUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) { }


    async execute(): Promise<{ data: Task[]; results: number; }> {
        try {
            const tasks = await this.taskRepository.getTasks()

            console.log("🚀 ~ file: GetTasksUseCase.ts:16 ~ GetTasks ~ execute ~ tasks:", tasks);

            return tasks;


        } catch (error) {
            
            throw new Error;
        }
    }
}