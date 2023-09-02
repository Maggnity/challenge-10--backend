import { prisma } from "../App";
import { CategoryTask, Task, TaskDTO } from "../Entities/Tasks";
import { ITaskRepository } from "./contracts/ITaskRepository";

export class TaskRepository implements ITaskRepository {

    constructor() { }

    async getTasks(): Promise<{ data: any[]; results: number; }> {

        const response = await prisma.tasks.findMany({})

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
                status: data.status
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
}