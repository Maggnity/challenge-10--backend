import { tasks, tasks_status } from "@prisma/client";
import { prisma } from "../App";
import { Task, TaskDTO } from "../Entities/Tasks";
import { ITaskRepository } from "./contracts/ITaskRepository";

export class TaskRepository implements ITaskRepository {

    constructor() { }

    async getTasks(): Promise<{ data: tasks[]; results: number; }> {

        const response = await prisma.tasks.findMany({})

        const responseCount = await prisma.tasks.count({})

        return { data: response, results: responseCount }
    }

    async postTask(data: Partial<tasks>): Promise<tasks> {

        const response = await prisma.tasks.create({
            data: {
                title: data.title,
                description: data.description,
                startDate: data.startDate,
                endDate: data.endDate,
            }
        })

        return response
    }
    async putTask(data: Partial<tasks>): Promise<tasks> {

        const response = await prisma.tasks.update({
            data: {
                title: data.title,
                description: data.description,
                startDate: data.startDate,
                endDate: data.endDate,
            },
            where: {
                id: data.id
            }
        })

        return response
    }

    async deleteTask(id: number): Promise<void> {
        const response = await prisma.tasks.delete({
            where: {
                id
            }
        })
        return
    }
   
    async getStatusTasks(): Promise<{ data: tasks_status[]; results: number; }> {

        const response = await prisma.tasks_status.findMany({})

        const results = await prisma.tasks_status.count({})

        return { data: response, results }
    }

    async subscribeStatus(statusId: number, taskId: number): Promise<void> {
        const response = await prisma.assigned_status.create({
            data: {
                id_status: statusId,
                id_task: taskId
            }
        })
        return
    }
}