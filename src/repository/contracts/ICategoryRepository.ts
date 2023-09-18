import { Category } from "../../Entities/Category";
import { Task } from "../../Entities/Tasks";

export class ICategoryRepository {

    getCategories: () => Promise<{ data: Category[], results: number }>
    addCategory: (data: Category) => Promise<Category>


}


