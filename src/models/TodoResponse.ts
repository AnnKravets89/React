import type {ITodoModel} from "./TodoModel.ts";

export interface ITodoResponse {
    todos: ITodoModel[],
    total: number,
    skip: number,
    limit: number
}
