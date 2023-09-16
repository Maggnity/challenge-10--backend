import { assigned_categories } from "@prisma/client";
import { Category } from "../../Entities/Category";
import { Task } from "../../Entities/Tasks";

export class ICategoryRepository {

    getCategories: () => Promise<{ data: Category[], results: number }>
    addCategory: (data: Category) => Promise<Category>

    getAssignedCategory: (taskId: Task["id"]) => Promise<Category | null>
    subscribeCategory: (taskId: number, categoryId: Category["id"]) => Promise<assigned_categories>

    updateSubscribedCategory: (taskId: number, categoryId: Category["id"]) => Promise<void>
}


