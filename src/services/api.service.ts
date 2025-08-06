import type {ITodoModel} from "../models/TodoModel.ts";
import type {ITodoResponse} from "../models/TodoResponse.ts";
import type {IPostModel} from "../models/PostModel.ts";
import type {IPostResponse} from "../models/PostResponse.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts'

export const loadTodos = async (): Promise<ITodoModel[]> => {
    const todoResponse: ITodoResponse =  await fetch(endpointTodos)
        .then(value => value.json());
    return todoResponse.todos;
}

export const loadPosts = async (): Promise<IPostModel[]> => {
    const postResponse: IPostResponse = await fetch(endpointPosts)
        .then(value => value.json());
    return postResponse.posts;
}
