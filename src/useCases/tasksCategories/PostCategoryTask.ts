import { CategoryTask } from "../../Entities/Tasks";
import { ITaskRepository } from "../../repository/contracts/ITaskRepository";
import { IPostCategoryTaskUseCase } from "./contracts/IPostCategoryTaskUseCase";

export class PostCategoryTaskUseCase implements IPostCategoryTaskUseCase {

constructor(
    private taskRepository: ITaskRepository
) {}

async execute(data: CategoryTask): Promise<CategoryTask> {

try {
    const response = await this.taskRepository.addCategoryTask(data)
    return response
} catch (error) {

    console.log("🚀 ~ file: PostCategoriyTask.ts:18 ~ PostCategoryTaskUseCase ~ execute ~ error:", error);
    throw(error)
    
}
}

}