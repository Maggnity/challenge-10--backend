
type OrderBy = {
    created_at: "asc" | "desc"
}

export type Params<T> = {

    filters?: { 
        created_at: "asc" | "desc" 
        
    } & T | string & T,
    limit: number,
    offset: number

}