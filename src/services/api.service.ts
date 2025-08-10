import type {IUserJson} from "../models/users-json-models/UserJsonModel.ts";
import {urls} from "../constants/urls.ts";

export const usersJsonService = {
    getUsersJson: async (): Promise<IUserJson[]> => {
        return await fetch(urls.usersJson.allUsersJson)
            .then(value => value.json());
    }
}
