import { tasks } from "@prisma/client";
import { Category } from "../../../Entities/Category";
import { Task } from "../../../Entities/Tasks";

export interface ITasks {
    getTasks: (userID:string, categories: Category[]) => Promise<{data: tasks[], results: number}>

    createTask: (userID:string, data: Partial<tasks>) => Promise<tasks>
    updateTask: (userID:string, data: Partial<tasks>) => Promise<tasks>
    deleteTask: (userID:string, id: number) => Promise<void>

}