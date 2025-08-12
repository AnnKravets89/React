import type {IUser} from "./UserModel.ts";

export interface IUserResponse {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}
