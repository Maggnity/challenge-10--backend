import { tasks_status } from "@prisma/client";

export interface IPostTaskStatusUseCase {

    execute: (userID, data:tasks_status) => Promise<void>
}