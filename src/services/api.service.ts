import type {ITodoModel} from "../models/TodoModel.ts";


export const loadTodos = async (): Promise<ITodoModel[]> => {
    return await fetch(import.meta.env.VITE_API_BASE_URL + '/todos')
        .then(value => value.json());
}
