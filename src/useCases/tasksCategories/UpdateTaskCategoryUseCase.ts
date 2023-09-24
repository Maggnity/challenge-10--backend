import { tasks_category } from "@prisma/client";
import { ICategoryRepository } from "../../repository/contracts/ICategoryRepository";
import { Category } from "../../Entities/Category";
import { IUpdateCategoryTaskUseCase } from "./contracts/IUpdateCategoryTaskUseCase";

export class UpdateCategoryTaskUseCase implements IUpdateCategoryTaskUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ) { }

    async execute(data: tasks_category): Promise<tasks_category[]> {

        try {

            const newData = { ...data, checked: !data.checked }
            const response = await this.categoryRepository.updateCategory(newData)

            const categories = await this.categoryRepository.getCategories()
            return categories.data
        } catch (error) {

            console.log("🚀 ~ file: PostCategoriyTask.ts:18 ~ PostCategoryTaskUseCase ~ execute ~ error:", error);
            throw (error)

        }
    }
}