import type {ITodoModel} from "../models/TodoModel.ts";
import type {ITodoResponse} from "../models/TodoResponse.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'

export const loadTodos = async (): Promise<ITodoModel[]> => {
    const todoResponse: ITodoResponse =  await fetch(endpointTodos)
        .then(value => value.json());
    return todoResponse.todos;
}
