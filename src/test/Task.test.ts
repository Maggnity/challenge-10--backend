import { Task, TaskDTO } from "../Entities/Tasks";
import { CategoryRepository } from "../repository/CategoryRepository";
import { TaskRepository } from "../repository/TaskRepository";
import { Tasks } from "../useCases/tasks/TaskUseCase";

const repo = new TaskRepository();
const categoryRepo = new CategoryRepository();

const task = new Tasks(repo, categoryRepo)

test("Tasks devem ser retornadas", async () => {

    const tasks = await task.getTasks()
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

// test.only("Tasks devem possuir data final maior que data de início", async () => {})


