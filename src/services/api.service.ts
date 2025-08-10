import type {IUserJson} from "../models/users-json-models/UserJsonModel.ts";
import {urls} from "../constants/urls.ts";
import type {IPostsJson} from "../models/PostJsonModel.ts";

export const usersJsonService = {
    getUsersJson: async (): Promise<IUserJson[]> => {
        return await fetch(urls.usersJson.allUsersJson)
            .then(value => value.json());
    }
}

export const postsJsonService = {
    getPostsJson: async (): Promise<IPostsJson[]> => {
        return await fetch(urls.postsJson.allPostsJson)
            .then(value => value.json());
    }
}
