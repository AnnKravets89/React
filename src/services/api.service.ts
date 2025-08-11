import type {IUserResponse} from "../models/UserResponseModel.ts";

const baseUrls = 'https://dummyjson.com';

export const userService = {
    getUsers: async (): Promise<IUserResponse> => {
        return await fetch(baseUrls + '/users')
            .then(value => value.json());
    }
}
