import { Router } from "express"
import { TaskController } from "../controller/Task/TaskController"
import { TaskRepository } from "../repository/TaskRepository"
import { GetTaskCategories } from "../useCases/tasksCategories/GetTaskCategories"
import { PostCategoryTaskUseCase } from "../useCases/tasksCategories/PostCategoryTask"
import { GetTaskStatus } from "../useCases/tasksStatus/GetTaskStatusUseCase"
import { CategoryRepository } from "../repository/CategoryRepository"
import { Tasks } from "../useCases/tasks/TaskUseCase"

export const TaskRouter = () => {

    const routes = Router()

    const repo = new TaskRepository()
    const categoryRepo = new CategoryRepository()

    const task = new Tasks(repo, categoryRepo)

    const getTaskCategories = new GetTaskCategories(categoryRepo)
    const postTasksCategories = new PostCategoryTaskUseCase(categoryRepo)
    
    const getStatusTask = new GetTaskStatus(repo)


    const controller = new TaskController(
        task,
        getTaskCategories,
        postTasksCategories,
        getStatusTask
    )

    routes.get('/tasks', (req, res) => controller.getTasks(req, res))
    routes.post('/task', (req, res) => controller.postTasks(req, res))
    routes.put('/task', (req, res) => controller.putTasks(req, res))
    routes.delete("/task", (req, res) => controller.deleteTask(req, res))


    routes.get('/task-categories', (req, res) => controller.getCategories(req, res))
    routes.post('/task-category', (req, res) => controller.postCategoryTask(req, res))
    //routes.put('/task-category', (req, res) => controller.postTaskCategories(req, res))
    //routes.delete('/task-category', (req, res) => controller.postTaskCategories(req, res))

    routes.get('/task-status', (req, res) => controller.getStatusTask(req, res))

    return routes

} 