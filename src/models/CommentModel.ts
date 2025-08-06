import type {IUserModel} from "./IUserComment.ts";

export interface ICommentModel {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: IUserModel;
}
