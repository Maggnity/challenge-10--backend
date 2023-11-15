import { tasks, tasks_status } from "@prisma/client";
import { prisma } from "../App";
import { ITaskRepository } from "./contracts/ITaskRepository";
import { Category } from "../Entities/Category";

export class TaskRepository implements ITaskRepository {

    constructor() { }

    async getTasks(userID: string, category?: Category["id"]): Promise<{ data: tasks[]; results: number; }> {


        const response = await prisma.tasks.findMany({
            where: {
                user_id: userID
            }
        })

        console.log("🚀 ~ file: TaskRepository.ts:19 ~ TaskRepository ~ getTasks ~ response:", response);

        const responseCount = await prisma.tasks.count({where: {category}})

        return { data: response, results: responseCount }
    }

    async postTask(userID:string, data: Partial<tasks>): Promise<tasks> {

        console.log({userID})

        const response = await prisma.tasks.create({
            data: {
                title: data.title,
                description: data.description,
                startDate: data.startDate,
                endDate: data.endDate,
                category: data.category,
                status: data.status,
                user_id: userID
            }
        })

        return response
    }
    async putTask(userID: string, data: Partial<tasks>): Promise<tasks> {

    console.log("🚀 ~ file: TaskRepository.ts:36 ~ TaskRepository ~ putTask ~ data:", data);


        const response = await prisma.tasks.update({
            data: {
                title: data.title,
                description: data.description,
                startDate: data.startDate,
                endDate: data.endDate,
                category: data.category,
                status: data.status
            },
            where: {
                id: data.id,
                user_id: userID
            }
        })

        return response
    }

    async deleteTask(userID: string, id: number): Promise<void> {

        console.log("🚀 ~ file: TaskRepository.ts:58 ~ TaskRepository ~ deleteTask ~ id:", id);

        const response = await prisma.tasks.delete({
            where: {
                id,
                user_id: userID
            }
        })
        return
    }
   
    async getStatusTasks(): Promise<{ data: tasks_status[]; results: number; }> {

        const response = await prisma.tasks_status.findMany({})

        const results = await prisma.tasks_status.count({})

        return { data: response, results }
    }

    async postStatusTask(userID: string, data: tasks_status): Promise<void> {

        const response = await prisma.tasks_status.create({
            data: {
                status_text: data.status_text,
                status_value: data.status_text,
                user_id: userID
            }
        })

        return
    }
}