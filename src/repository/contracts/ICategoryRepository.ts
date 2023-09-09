import { assigned_categories } from "@prisma/client";
import { Category } from "../../Entities/Category";
import { Task } from "../../Entities/Tasks";

export class ICategoryRepository {

    getCategories: () => Promise<{ data: Category[], results: number }>
    addCategory: (data: Category) => Promise<Category>

    getAssignedCategory: (taskId: Task["id"]) => Promise<Category | null>
    subscribeCategory: (taskId: Task["id"], categoryId: Category["id"]) => Promise<assigned_categories>
}


