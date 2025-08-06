import type {IReactionPost} from "./ReactionPost.ts";

export interface IPostModel {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactionPost;
  views: number;
  userId: number;
}
