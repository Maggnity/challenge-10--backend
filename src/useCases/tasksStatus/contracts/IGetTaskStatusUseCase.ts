import { tasks_status } from "@prisma/client";

export interface IGetTaskStatusUseCase {

    execute: () => Promise<{data: tasks_status[], results: number}>

}