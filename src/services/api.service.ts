import type {IUserResponse} from "../models/UserResponseModel.ts";

const url = 'https://dummyjson.com';

export const userService = {
    getUsers: async (page: string): Promise<IUserResponse> => {
        const limit = 30;
        const skip = limit * (+page) - limit;
        return await fetch(url + '/users' + '?skip=' + skip)
            .then(value => value.json())
    }
}
