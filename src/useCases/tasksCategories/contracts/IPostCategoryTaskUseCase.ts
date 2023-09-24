import { tasks_category } from "@prisma/client";
import { Category } from "../../../Entities/Category";

export interface IPostCategoryTaskUseCase {
    execute: (data:Category) => Promise<tasks_category>
}

