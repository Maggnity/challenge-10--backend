import { Router } from "express"
import { GetTasks } from "../useCases/tasks/GetTasksUseCase"
import { TaskController } from "../controller/Task/TaskController"
import { TaskRepository } from "../repository/TaskRepository"
import { PostTask } from "../useCases/tasks/PostTaskUseCase"
import { GetTaskCategories } from "../useCases/tasksCategories/GetTaskCategories"
import { PostCategoryTaskUseCase } from "../useCases/tasksCategories/PostCategoryTask"
import { GetTaskStatus } from "../useCases/tasksStatus/GetTaskStatusUseCase"

export const TaskRouter = () => {

    const routes = Router()

    const repo = new TaskRepository()

    const getTasks = new GetTasks(repo)
    const postTask = new PostTask(repo)

    const getTaskCategories = new GetTaskCategories(repo)
    const postTasksCategories = new PostCategoryTaskUseCase(repo)
    //const puttTasksCategories =  new PutTasksCategories(repo)
    //const deleteTasksCategories =  new DeleteTasksCategories(repo)

    const getStatusTask = new GetTaskStatus(repo)


    const controller = new TaskController(
        getTasks,
        postTask,

        getTaskCategories,
        postTasksCategories,

        getStatusTask
        //puttTasksCategories,
        // deleteTasksCategories
    )

    routes.get('/tasks', (req, res) => controller.getTasks(req, res))
    routes.post('/task', (req, res) => controller.postTasks(req, res))

    routes.get('/task-categories', (req, res) => controller.getCategoriesTask(req, res))
    routes.post('/task-category', (req, res) => controller.postCategoryTask(req, res))
    //routes.put('/task-category', (req, res) => controller.postTaskCategories(req, res))
    //routes.delete('/task-category', (req, res) => controller.postTaskCategories(req, res))

    routes.get('/task-status', (req, res) => controller.getStatusTask(req, res))

    return routes

} 