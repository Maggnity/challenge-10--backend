export interface Task {
    id: number
    title: string | null,
    description: string | null,
    startDate: string | null,
    endDate: string | null,
    status: number | null
    category: CategoryTask["id"] | null
}

export type TaskDTO = Partial<Pick<Task, "description" | "endDate" | "startDate" | "status" | "title" | "category">>


export type CategoryTask = {
    id?: number
    category_text: string
    category_value: string
}
