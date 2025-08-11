import type {ICommentUser} from "./CommentUser.ts";

export interface ICommentDummy {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: ICommentUser;
}
