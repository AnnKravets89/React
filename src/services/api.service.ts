import type {IUserResponse} from "../models/UserResponseModel.ts";
import type {ICartResponse} from "../models/CartResponseModel.ts";

const baseUrl = 'https://dummyjson.com';

export const userService = {
    getUsers: async (): Promise<IUserResponse> => {
        return await fetch(baseUrl + '/users')
            .then(value => value.json());
    },
    asd:()=> {

    }
}

export const cartService = {
    getCartsOfUser: async (userId: string): Promise<ICartResponse> => {
        return await fetch(baseUrl + '/carts/user/' + userId)
            .then(value => value.json());
    },
    qwe:()=> {

    }
}
