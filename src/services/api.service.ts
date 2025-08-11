import type {IUserResponse} from "../models/users-models/UserResponseModel.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL;

export const getUsers = async (): Promise<IUserResponse> => {
    return await fetch(endpoint + '/users')
        .then(value => value.json());
}
