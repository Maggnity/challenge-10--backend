import { tasks } from "@prisma/client";
import { Category } from "../../../Entities/Category";
import { Task } from "../../../Entities/Tasks";

export interface ITasks {
    getTasks: () => Promise<{data:{task: tasks, category: Category | null}[], results: number}>

    createTask: (data: Partial<tasks>) => Promise<tasks>
    updateTask: (data: Partial<tasks>) => Promise<tasks>
    deleteTask: (id: number) => Promise<void>
    assignCategory: (taskId: tasks["id"], categoryId: Category["id"]) => Promise<void>
    assignStatus: (taskId: tasks["id"], statusId: number) => Promise<void>
}