import { Category } from "../../Entities/Category";
import { ICategoryRepository } from "../../repository/contracts/ICategoryRepository";
import { ITaskRepository } from "../../repository/contracts/ITaskRepository";
import { IPostCategoryTaskUseCase } from "./contracts/IPostCategoryTaskUseCase";

export class PostCategoryTaskUseCase implements IPostCategoryTaskUseCase {

constructor(
    private categoryRepository: ICategoryRepository
) {}

async execute(data: Category): Promise<Category> {

try {
    const response = await this.categoryRepository.addCategory(data)
    return response
} catch (error) {

    console.log("🚀 ~ file: PostCategoriyTask.ts:18 ~ PostCategoryTaskUseCase ~ execute ~ error:", error);
    throw(error)
    
}
}

}