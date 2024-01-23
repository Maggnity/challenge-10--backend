
type OrderBy = {
    created_at: "asc" | "desc"
}

export type Params = {

    filters?: { created_at: "asc" | "desc" } | string,
    limit: number,
    offset: number

}