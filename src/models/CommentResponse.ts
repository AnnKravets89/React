import type {ICommentModel} from "./CommentModel.ts";

export interface ICommentResponse {
    comments: ICommentModel[],
    total: number,
    skip: number,
    limit: number
}
