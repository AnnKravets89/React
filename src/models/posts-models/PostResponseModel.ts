import type {IPost} from "./PostModel.ts";

export interface IPostResponse {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}
