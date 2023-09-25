import { tasks_category } from "@prisma/client";
import { Category } from "../../Entities/Category";
import { Task } from "../../Entities/Tasks";

export class ICategoryRepository {

    getCategories: () => Promise<{ data: tasks_category[], results: number }>
    addCategory: (data: Category) => Promise<tasks_category>

    updateCategory: (data:tasks_category)=> Promise<tasks_category> 
}


