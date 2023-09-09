import express from "express";
import BaseController from "../BaseController";
import { z } from "zod";
import { IGetTaskCategoriesUseCase } from "../../useCases/tasksCategories/contracts/IGetTaskCategoriesUseCase";
import { IPostCategoryTaskUseCase } from "../../useCases/tasksCategories/contracts/IPostCategoryTaskUseCase";
import { IGetTaskStatusUseCase } from "../../useCases/tasksStatus/contracts/IGetTaskStatusUseCase";
import { ITasks } from "../../useCases/tasks/contract/ITasks";

export class TaskController extends BaseController {

    constructor(
        private tasksUseCase: ITasks,
        private getTaskCategoriesUseCase: IGetTaskCategoriesUseCase,
        private postTaskCategoriesUseCase: IPostCategoryTaskUseCase,
        private getTaskStatusUseCase: IGetTaskStatusUseCase,
        //private postTaskStatusUseCase: IPostCategoryTaskUseCase
    ) { super() }

    async getTasks(req: express.Request, res: express.Response) {

        try {
            const response = await this.tasksUseCase.getTasks()

            super.ok(res, response)
        } catch (error) {

            console.log("🚀 ~ file: TaskController.ts:17 ~ TaskController ~ getTasks ~ error:", error);
            super.fail(res, error)


        }
    }

    async postTasks(req: express.Request, res: express.Response) {

        const data = z.object({
            id: z.number().optional(),
            title: z.string(),
            description: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            status: z.number(),
            category: z.number()
        }).parse(req.body)

        try {
            const response = await this.tasksUseCase.createTask(data)

            super.ok(res, response)
        } catch (error) {

            console.log("🚀 ~ file: TaskController.ts:17 ~ TaskController ~ getTasks ~ error:", error);
            super.fail(res, error)


        }
    }
    async putTasks(req: express.Request, res: express.Response) {

        const data = z.object({
            id: z.number().optional(),
            title: z.string(),
            description: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            status: z.number(),
            category: z.number()
        }).parse(req.body)

        try {
            const response = await this.tasksUseCase.updateTask(data)

            super.ok(res, response)
        } catch (error) {

            console.log("🚀 ~ file: TaskController.ts:17 ~ TaskController ~ getTasks ~ error:", error);
            super.fail(res, error)


        }
    }

    async getCategories(req: express.Request, res: express.Response) {
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