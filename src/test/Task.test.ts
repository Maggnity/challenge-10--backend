import { Task, TaskDTO } from "../Entities/Tasks";
import { TaskRepository } from "../repository/TaskRepository";
import { PostTask } from "../useCases/tasks/PostTaskUseCase";
import { Tasks } from "../useCases/tasks/TaskUseCase";

const repo = new TaskRepository()
const task = new Tasks(repo)

test("Tasks devem ser retornadas", () => {

    const tasks = task.getTasks()
    expect(tasks).not.toBe(null)
    

})

test("Tasks devem ser criadas com um ID", async () => {
    
    const data: TaskDTO  = {
        title: `Tesk${Date}`,
        description: "Lorem Ipsum is simply dummy text.",
        category: 1,
        startDate: `${Date.now()}`, 
        endDate: `${Date.now() *2}`,
        status: 1
    }

    const newTask = await task.createTask(data)

    // when

    // then
    expect(newTask.id).toBeDefined()
})

test("Tasks devem possuir data final maior que data de início", async () => {
    
    const data: TaskDTO  = {
        title: `Tesk${Date}`,
        description: "Lorem Ipsum is simply dummy text.",
        category: 1,
        startDate: `${Date.now()}`, 
        endDate: `${Date.now() - 2}`,
        status: 1
    }

    const newTask = await task.createTask(data)

    // when

    // then
    expect(newTask).toBeNull()
})


