import {urls} from "../constants/urls.ts";
import type {IUser} from "../models/UserModel.ts";
import type {IPost} from "../models/PostModel.ts";


export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(value => value.json())

    },
    getUser: async (id: number) => {
        return await fetch(urls.users.byId(id))
            .then(value => value.json());

    }
}

export const postServices = {
    getAllPostsOfUserById: async (id: number): Promise<IPost[]> => {
        return await fetch(urls.posts.userPostsById(id))
            .then(post => post.json());
    }
}
