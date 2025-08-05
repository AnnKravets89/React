import type {IUser} from "../models/IUser.ts";

export const getUsers = async (): Promise<IUser[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json());

}

 const getUser = async (id: string): Promise<IUser> => {
    return await fetch(import.meta.env.VITE_API_URL + '/' + id)
        .then(value => value.json());

}
 export { getUser };
