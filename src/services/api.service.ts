import type {IComment} from "../models/IComment.ts";
import type {ITodo} from "../models/ITodo.ts";
import type {IPost} from "../models/IPost.ts";

const endpointTodos = import.meta.env.VITE_API_URL + '/todos';
const endpointPosts = import.meta.env.VITE_API_URL + '/posts';
const endpointComments = import.meta.env.VITE_API_URL + '/comments';

export const getsTodos = async (): Promise<ITodo[]> => {
        return await fetch(endpointTodos)
            .then(value => value.json());
}

export const loadPosts = async (): Promise<IPost[]> => {
        return await fetch(endpointPosts)
            .then(value => value.json());
}

export const loadComments = async (): Promise<IComment[]> => {
        return await fetch(endpointComments)
                .then(value => value.json());
}
