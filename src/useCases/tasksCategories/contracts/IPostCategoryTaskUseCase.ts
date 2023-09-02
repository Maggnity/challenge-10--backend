import { CategoryTask, Task } from "../../../Entities/Tasks";

export interface IPostCategoryTaskUseCase {
    execute: (data:CategoryTask) => Promise<CategoryTask>
}