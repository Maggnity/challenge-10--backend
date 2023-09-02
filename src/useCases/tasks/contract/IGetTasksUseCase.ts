import { Task } from "../../../Entities/Tasks";

export interface IGetTasksUseCase {
    execute: () => Promise<{data: Task[], results: number}>
}