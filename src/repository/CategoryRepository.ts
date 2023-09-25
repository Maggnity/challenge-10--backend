import { tasks_category } from "@prisma/client";
import { prisma } from "../App";
import { Category } from "../Entities/Category";
import { Task } from "../Entities/Tasks";
import { ICategoryRepository } from "./contracts/ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {

    async getCategories(): Promise<{ data: tasks_category[], results: number }> {

        const response = await prisma.tasks_category.findMany({})

        const results = await prisma.tasks_category.count({

        })

        return { data: response, results }
    }

    async addCategory(data: Category): Promise<tasks_category> {
        const response = await prisma.tasks_category.create({
            data: {
                category_text: data.category_text,
                category_value: data.category_value,
                category_color: data.category_color,
                checked: data.checked
            }
        })

        return response
    }

    async updateCategory(data:tasks_category): Promise<tasks_category> {

        const response = await prisma.tasks_category.update({
            where: {
                id: data.id
            },
            data
        })

        return response
    }


}