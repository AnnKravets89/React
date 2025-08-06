import type {ITodoModel} from "../models/TodoModel.ts";
import type {ITodoResponse} from "../models/TodoResponse.ts";
import type {IPostModel} from "../models/PostModel.ts";
import type {IPostResponse} from "../models/PostResponse.ts";
import type {ICommentModel} from "../models/CommentModel.ts";
import type {ICommentResponse} from "../models/CommentResponse.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts'
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments'

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

export const loadComments = async (): Promise<ICommentModel[]> => {
    const commentResponse: ICommentResponse = await fetch(endpointComments)
        .then(value => value.json());
    return commentResponse.comments;
}
