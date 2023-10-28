import { tasks, tasks_status } from "@prisma/client";
import {Task, TaskDTO } from "../../Entities/Tasks";

export class ITaskRepository {

    getTasks: () => Promise<{ data: tasks[], results: number }>
    postTask: (data: tasks) => Promise<tasks>
    putTask: (data: tasks) => Promise<tasks>
    deleteTask: (id: number) => Promise<void>

    getStatusTasks: () => Promise<{data: tasks_status[], results: number}>
    postStatusTask: (data: tasks_status) => Promise<void>
}