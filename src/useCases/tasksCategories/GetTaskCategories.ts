import { tasks_category } from "@prisma/client";
import { Category } from "../../Entities/Category";
import { Task } from "../../Entities/Tasks";
import { ICategoryRepository } from "../../repository/contracts/ICategoryRepository";
import { ITaskRepository } from "../../repository/contracts/ITaskRepository";
import { IGetTaskCategoriesUseCase } from "./contracts/IGetTaskCategoriesUseCase";

export class GetTaskCategories implements IGetTaskCategoriesUseCase {


    constructor(
        private categoriesRepository: ICategoryRepository
    ) { }


    async execute(): Promise<{data: tasks_category[], results: number}> {

        try {

            const response = await this.categoriesRepository.getCategories()

            console.log("🚀 ~ file: GetTaskCategories.ts:21 ~ GetTaskCategories ~ execute ~ response:", response);


            return response
            
        } catch (error) {

            console.log("🚀 ~ file: GetTaskCategories.ts:22 ~ GetTaskCategories ~ execute ~ error:", error);
            throw error
        }
    }
}