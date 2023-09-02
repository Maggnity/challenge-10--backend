import { CategoryTask } from "../../Entities/Tasks";
import { ITaskRepository } from "../../repository/contracts/ITaskRepository";
import { IGetTaskCategoriesUseCase } from "./contracts/IGetTaskCategoriesUseCase";

export class GetTaskCategories implements IGetTaskCategoriesUseCase {


    constructor(
        private taskCategoriesRepository: ITaskRepository
    ) { }


    async execute(): Promise<{data: CategoryTask[], results: number}> {

        try {

            const response = await this.taskCategoriesRepository.getCategoryTasks()

            return response
            
        } catch (error) {

            console.log("🚀 ~ file: GetTaskCategories.ts:22 ~ GetTaskCategories ~ execute ~ error:", error);
            throw error
        }
    }
}