import { tasks_category } from "@prisma/client";
import { Category } from "../../../Entities/Category";

export interface IGetTaskCategoriesUseCase {
    execute: () => Promise<{data: tasks_category[], results: number}>
}