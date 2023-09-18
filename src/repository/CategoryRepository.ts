import { prisma } from "../App";
import { Category } from "../Entities/Category";
import { Task } from "../Entities/Tasks";
import { ICategoryRepository } from "./contracts/ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {

    async getCategories(): Promise<{ data: Category[], results: number }> {

        const response = await prisma.tasks_category.findMany({

        })

        const results = await prisma.tasks_category.count({

        })

        return { data: response, results }
    }

    async addCategory(data: Category): Promise<Category> {
        const response = await prisma.tasks_category.create({
            data: {
                category_text: data.category_text,
                category_value: data.category_value
            }
        })

        return response
    }


}