import type {ICommentDummy} from "./CommentDummyModel.ts";

export interface ICommentDummyResponse {
    comments: ICommentDummy[],
    total: number,
    skip: number,
    limit: number
}
