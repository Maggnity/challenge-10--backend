import { tasks_status } from "@prisma/client";

export interface IPostTaskStatusUseCase {

    execute: (data:tasks_status) => Promise<void>
}