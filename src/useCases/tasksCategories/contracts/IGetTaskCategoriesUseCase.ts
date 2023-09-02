import { tasks_category } from "@prisma/client";
import { CategoryTask, Task } from "../../../Entities/Tasks";

export interface IGetTaskCategoriesUseCase {
    execute: () => Promise<{data: CategoryTask[], results: number}>
}