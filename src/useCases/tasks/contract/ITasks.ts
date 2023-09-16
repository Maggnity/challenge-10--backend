import { tasks } from "@prisma/client";
import { Category } from "../../../Entities/Category";
import { Task } from "../../../Entities/Tasks";

export interface ITasks {
    getTasks: () => Promise<{data: tasks[], results: number}>

    createTask: (data: Partial<tasks>) => Promise<tasks>
    updateTask: (data: Partial<tasks>) => Promise<tasks>
    deleteTask: (id: number) => Promise<void>

}