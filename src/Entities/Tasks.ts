export interface Task {
    id: number
    title: string | null,
    description: string | null,
    startDate: string | null,
    endDate: string | null,
    status: string | null
    category?: CategoryTask
}

export type TaskDTO = Partial<Pick<Task, "description" | "endDate" | "startDate" | "status" | "title">>


export type CategoryTask = {
    id?: number
    category_text: string
    category_value: string
}