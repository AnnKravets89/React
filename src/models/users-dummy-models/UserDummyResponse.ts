import type {IUserDummy} from "./UserDummyModel.ts";

export interface IUserDummyResponse {
    users: IUserDummy[]
    total: number,
    skip: number,
    limit: number
}
