import { CategoryTask, Task, TaskDTO } from "../../Entities/Tasks";

export class ITaskRepository {

    getTasks: () => Promise<{ data: Task[], results: number }>
    postTask: (data: TaskDTO) => Promise<Task>


    getCategoryTasks: () => Promise<{ data: CategoryTask[], results: number }>
    addCategoryTask: (data: CategoryTask) => Promise<CategoryTask>

}