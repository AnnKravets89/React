import type {IPost} from "../models/IPost.ts";
import type {ITodo} from "../models/ITodo.ts";

const endpointTodos = import.meta.env.VITE_API_URL + '/todos'
const endpointPosts = import.meta.env.VITE_API_URL + '/posts'

export const getsTodos = async (): Promise<ITodo[]> => {
        return await fetch(endpointTodos)
            .then(value => value.json());
}

export const loadPosts = async (): Promise<IPost[]> => {
        return await fetch(endpointPosts)
            .then(value => value.json());
}
