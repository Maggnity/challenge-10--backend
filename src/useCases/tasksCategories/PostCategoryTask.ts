import { tasks_category } from "@prisma/client";
import { Category } from "../../Entities/Category";
import { ICategoryRepository } from "../../repository/contracts/ICategoryRepository";
import { ITaskRepository } from "../../repository/contracts/ITaskRepository";
import { IPostCategoryTaskUseCase } from "./contracts/IPostCategoryTaskUseCase";

export class PostCategoryTaskUseCase implements IPostCategoryTaskUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ) { }

    async execute(data: Category): Promise<tasks_category> {

        try {
            const response = await this.categoryRepository.addCategory(data)

            //@ts-ignore
            return response
        } catch (error) {

            console.log("🚀 ~ file: PostCategoriyTask.ts:18 ~ PostCategoryTaskUseCase ~ execute ~ error:", error);
            throw (error)

        }
    }

}