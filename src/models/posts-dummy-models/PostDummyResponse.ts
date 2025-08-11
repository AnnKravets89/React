import type {IPostDummy} from "./PostDummyModel.ts";

export interface IPostDummyResponse {
    posts: IPostDummy[],
    total: number,
    skip: number,
    limit: number
}
