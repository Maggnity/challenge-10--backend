import { Task, TaskDTO } from "../../../Entities/Tasks";

export interface IPostTaskUseCase {

    execute: (data: TaskDTO) => Promise<Task>

}