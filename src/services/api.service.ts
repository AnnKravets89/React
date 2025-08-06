import type {ITodo} from "../models/ITodo.ts";

const endpointTodos = import.meta.env.VITE_API_URL + "/todos";

export const getTodos = async (): Promise<ITodo[]> => {
        return await fetch(endpointTodos)
            .then(value => value.json());
}
