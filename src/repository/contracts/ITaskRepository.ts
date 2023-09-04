import { tasks_status } from "@prisma/client";
import { CategoryTask, Task, TaskDTO } from "../../Entities/Tasks";

export class ITaskRepository {

    getTasks: () => Promise<{ data: Task[], results: number }>
    postTask: (data: TaskDTO) => Promise<Task>


    getCategoryTasks: () => Promise<{ data: CategoryTask[], results: number }>
    addCategoryTask: (data: CategoryTask) => Promise<CategoryTask>


    getStatusTasks: () => Promise<{data: tasks_status[], results: number}>

}