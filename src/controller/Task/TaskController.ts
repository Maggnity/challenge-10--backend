import express from "express";
import BaseController from "../BaseController";
import { z } from "zod";
import { IGetTaskCategoriesUseCase } from "../../useCases/tasksCategories/contracts/IGetTaskCategoriesUseCase";
import { IPostCategoryTaskUseCase } from "../../useCases/tasksCategories/contracts/IPostCategoryTaskUseCase";
import { IGetTaskStatusUseCase } from "../../useCases/tasksStatus/contracts/IGetTaskStatusUseCase";
import { ITasks } from "../../useCases/tasks/contract/ITasks";
import { tasks } from "@prisma/client";
import { IUpdateCategoryTaskUseCase } from "../../useCases/tasksCategories/contracts/IUpdateCategoryTaskUseCase";
import { IPostTaskStatusUseCase } from "../../useCases/tasksStatus/contracts/IPostTaskStatusUseCase";

export class TaskController extends BaseController {

    constructor(
        private tasksUseCase: ITasks,
        private getTaskCategoriesUseCase: IGetTaskCategoriesUseCase,
        private postTaskCategoriesUseCase: IPostCategoryTaskUseCase,
        private updateTaskCategoriesUseCase: IUpdateCategoryTaskUseCase,
        private getTaskStatusUseCase: IGetTaskStatusUseCase,
        private postStatusTaskUseCase: IPostTaskStatusUseCase
    ) { super() }

    async getTasks(req: express.Request, res: express.Response) {
        try {


            const reqCategories = req.query.category?.toString()
            const categories = reqCategories ? JSON.parse(reqCategories) : ''

            const response = await this.tasksUseCase.getTasks(categories)

            console.log("🚀 ~ file: TaskController.ts:29 ~ TaskController ~ getTasks ~ response:", response);


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
            description: z.string().optional(),
            startDate: z.string().optional(),
            endDate: z.string().optional().nullable(),
            status: z.number().optional(),
            category: z.number().optional()
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
            title: z.string().optional(),
            description: z.string().optional().nullable(),
            startDate: z.string().optional(),
            endDate: z.string().optional().nullable(),
            status: z.number().optional(),
            category: z.number().nullable()
        }).parse(req.body)

        try {
            const response = await this.tasksUseCase.updateTask(data)

            super.ok(res, response)
        } catch (error) {

            console.log("🚀 ~ file: TaskController.ts:17 ~ TaskController ~ getTasks ~ error:", error);
            super.fail(res, error)


        }
    }
    async deleteTask(req: express.Request, res: express.Response) {

        const id = z.number().parse(req.body.id)
        try {
            const response = await this.tasksUseCase.deleteTask(id)
            super.ok(res, response)
        } catch (error) {
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
            category_value: z.string(),
            category_color: z.string().optional(),
            checked: z.boolean()

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
    async putCategoryTask(req: express.Request, res: express.Response) {

        const data = z.object({
            id: z.number(),
            category_text: z.string(),
            category_value: z.string(),
            category_color: z.string().nullable(),
            checked: z.boolean()
        }).parse(req.body)

        try {
            const response = await this.updateTaskCategoriesUseCase.execute(data)
            super.ok(res, response)

        } catch (error) {

            console.log("🚀 ~ file: TaskController.ts:148 ~ TaskController ~ putCategoryTask ~ error:", error);
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

    async postStatusTask(req: express.Request, res: express.Response) {
        try {

            const data = req.body

            const response = await this.postStatusTaskUseCase.execute(data)
            super.ok(res, response)
        } catch (error) {

            console.log("🚀 ~ file: TaskController.ts:178 ~ TaskController ~ postStatusTask ~ error:", error);

            super.fail(res, error)

            
        }
    }

}