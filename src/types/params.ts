
type OrderBy = {
    created_at: "asc" | "desc"
}

export type Params = {

    filters: {
        created_at: "asc" | "desc",
    },
    limit: number,
    offset: number

}