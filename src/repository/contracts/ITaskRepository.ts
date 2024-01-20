import { tasks, tasks_status } from "@prisma/client";
import {Task, TaskDTO } from "../../Entities/Tasks";

export class ITaskRepository {

    getTasks: (userID: string) => Promise<{ data: tasks[], results: number }>
    postTask: (userID: string, data: tasks) => Promise<tasks>
    putTask: (userID: string, data: tasks) => Promise<tasks>
    deleteTask: (userID: string, id: string) => Promise<void>

    getStatusTasks: () => Promise<{data: tasks_status[], results: number}>
    postStatusTask: (userID:string, data: tasks_status) => Promise<void>
}