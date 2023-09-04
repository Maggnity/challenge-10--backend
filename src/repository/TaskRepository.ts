import { tasks_status } from "@prisma/client";
import { prisma } from "../App";
import { CategoryTask, Task, TaskDTO } from "../Entities/Tasks";
import { ITaskRepository } from "./contracts/ITaskRepository";

export class TaskRepository implements ITaskRepository {

    constructor() { }

    async getTasks(): Promise<{ data: any[]; results: number; }> {

        const response = await prisma.tasks.findMany({
            include: {
                tasks_category: true,
                tasks_status: true
            }
        })

        const responseCount = await prisma.tasks.count({})

        return { data: response, results: responseCount }
    }

    async postTask(data: TaskDTO): Promise<Task> {

        const response = await prisma.tasks.create({
            data: {
                title: data.title,
                description: data.description,
                startDate: data.startDate,
                endDate: data.endDate,
                status: data.status,
                category: data.category
            }
        })

        return response
    }


    async getCategoryTasks(): Promise<{data: CategoryTask[], results: number}> {

        const response = await prisma.tasks_category.findMany({

        })

        const results = await prisma.tasks_category.count({

        })

        return {data: response, results}
    }

    async addCategoryTask(data: CategoryTask): Promise <CategoryTask> {
        const response = await prisma.tasks_category.create({
            data: {
                category_text: data.category_text,
                category_value: data.category_value
            }
        })

        return response
    }


    async getStatusTasks(): Promise<{ data: tasks_status[]; results: number; }> {

        const response = await prisma.tasks_status.findMany({})

        const results = await prisma.tasks_status.count({})

        return { data: response, results }
    }
}