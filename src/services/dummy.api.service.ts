import type {IUserDummyResponse} from "../models/users-dummy-models/UserDummyResponse.ts";
import type {IPostDummyResponse} from "../models/posts-dummy-models/PostDummyResponse.ts";
import type {ICommentDummyResponse} from "../models/comments-dummy-models/CommentDummyResponse.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL;

export const userService = {
    getUsersDummy: async (): Promise<IUserDummyResponse> => {
        return await fetch(endpoint + '/users')
            .then(value => value.json());
    }
}

export const postService = {
    getPostsDummy: async (): Promise<IPostDummyResponse> => {
        return await fetch(endpoint + '/posts')
            .then(value => value.json());
    }
}

export const commentService = {
    getCommentsDummy: async (): Promise<ICommentDummyResponse> => {
        return await fetch(endpoint + '/comments')
            .then(value => value.json());
    }
}
