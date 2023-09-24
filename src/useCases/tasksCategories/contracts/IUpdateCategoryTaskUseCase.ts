import { tasks_category } from "@prisma/client";
import { Category } from "../../../Entities/Category";

export interface IUpdateCategoryTaskUseCase {
    execute: (data:tasks_category) => Promise<tasks_category[]>
}