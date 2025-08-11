import type {IUserResponse} from "../models/users-models/UserResponseModel.ts";
import type {IPostResponse} from "../models/posts-models/PostResponseModel.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL;

export const getUsers = async (): Promise<IUserResponse> => {
    return await fetch(endpoint + '/users')
        .then(value => value.json());
}

export const getPosts = async (): Promise<IPostResponse> => {
    return await fetch(endpoint + '/posts')
        .then(value => value.json());
}
