import type {IUserDummy} from "./UserDummyModel.ts";

export interface IUserDummyResponse {
    usersDummy: IUserDummy[],
    total: number,
    skip: number,
    limit: number
}
