import { Category } from "./Category"

export interface Task {
    id: number | undefined,
    title: string | undefined,
    description: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    status: number | undefined
    category?: number | undefined
}

export type TaskDTO = Partial<Pick<Task, "description" | "endDate" | "startDate" | "status" | "title" | "category">>



