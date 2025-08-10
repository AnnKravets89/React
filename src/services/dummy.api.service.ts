import type {IUserDummyResponse} from "../models/users-dummy-models/UserDummyResponse.ts";

const endpointUsers = import.meta.env.VITE_API_BASE_URL;

export const userService = {
    getUsersDummy: async (): Promise<IUserDummyResponse> => {
        return await fetch(endpointUsers + '/users')
            .then(value => value.json());
    }
}
