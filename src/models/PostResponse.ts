import type {IPostModel} from "./PostModel.ts";

export interface IPostResponse {
    posts: IPostModel[],
    total: number,
    skip: number,
    limit: number
}
