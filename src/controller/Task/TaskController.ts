import express from "express";
import { IGetTasksUseCase } from "../../useCases/tasks/contract/IGetTasksUseCase";
import BaseController from "../BaseController";
import { IPostTaskUseCase } from "../../useCases/tasks/contract/IPostTaskUseCase";
import { z } from "zod";
import { IGetTaskCategoriesUseCase } from "../../useCases/tasksCategories/contracts/IGetTaskCategoriesUseCase";
import { IPostCategoryTaskUseCase } from "../../useCases/tasksCategories/contracts/IPostCategoryTaskUseCase";
import { IGetTaskStatusUseCase } from "../../useCases/tasksStatus/contracts/IGetTaskStatusUseCase";

export class TaskController extends BaseController {

    constructor(
        private getTasksUseCase: IGetTasksUseCase,
        private postTasksUseCase: IPostTaskUseCase,
        private getTaskCategoriesUseCase: IGetTaskCategoriesUseCase,
        private postTaskCategoriesUseCase: IPostCategoryTaskUseCase,
        private getTaskStatusUseCase: IGetTaskStatusUseCase,
        //private postTaskStatusUseCase: IPostCategoryTaskUseCase
    ) { super() }

    async getTasks(req: express.Request, res: express.Response) {

        try {
            const response = await this.getTasksUseCase.execute()

            super.ok(res, response)
        } catch (error) {

            console.log("🚀 ~ file: TaskController.ts:17 ~ TaskController ~ getTasks ~ error:", error);
            super.fail(res, error)


        }
    }

    async postTasks(req: express.Request, res: express.Response) {

        const data = z.object({
            title: z.string(),
            description: z.string().optional(),
            startDate: z.string().optional(),
            endDate: z.string().optional(),
            status: z.number().optional(),
            category: z.number().optional()
        }).parse(req.body)

        try {
            const response = await this.postTasksUseCase.execute(data)

            super.ok(res, response)
        } catch (error) {

            console.log("🚀 ~ file: TaskController.ts:17 ~ TaskController ~ getTasks ~ error:", error);
            super.fail(res, error)


        }
    }

    async getCategoriesTask(req: express.Request, res: express.Response) {
        try {
            const response = await this.getTaskCategoriesUseCase.execute()

            super.ok(res, response)
        } catch (error) {

            console.log("🚀 ~ file: TaskController.ts:61 ~ TaskController ~ getCategoriesTask ~ error:", error);

            super.fail(res, error)
        }
    }

    async postCategoryTask(req: express.Request, res: express.Response) {

        const data = z.object({
            category_text: z.string(),
            category_value: z.string()
        }).parse(req.body)

        console.log("🚀 ~ file: TaskController.ts:76 ~ TaskController ~ postCategoryTask ~ data:", data);


        try {
            const response = await this.postTaskCategoriesUseCase.execute(data)

            super.ok(res, response)
        } catch (error) {

            console.log("🚀 ~ file: TaskController.ts:17 ~ TaskController ~ getTasks ~ error:", error);
            super.fail(res, error)


        }
    }

    async getStatusTask(req: express.Request, res: express.Response) {
        try {
            const response = await this.getTaskStatusUseCase.execute()

            super.ok(res, response)
        } catch (error) {

            console.log("🚀 ~ file: TaskController.ts:103 ~ TaskController ~ getStatusTask ~ error:", error);

            super.fail(res, error)
        }
    }

}