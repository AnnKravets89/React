import type {IUserJson} from "../models/users-json-models/UserJsonModel.ts";
import {urls} from "../constants/urls.ts";
import type {IPostJson} from "../models/PostJsonModel.ts";
import type {ICommentJson} from "../models/CommentJsonModel.ts";

export const usersJsonService = {
    getUsersJson: async (): Promise<IUserJson[]> => {
        return await fetch(urls.usersJson.allUsersJson)
            .then(value => value.json());
    }
}

export const postsJsonService = {
    getPostsJson: async (): Promise<IPostJson[]> => {
        return await fetch(urls.postsJson.allPostsJson)
            .then(value => value.json());
    }
}

export const commentsJsonService = {
    getCommentsJson: async (): Promise<ICommentJson[]> => {
        return await fetch(urls.commentsJson.allCommentsJson)
            .then(value => value.json());
    }
}


