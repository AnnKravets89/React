import type {IReactions} from "./ReactionsDummyModel.ts";

export interface IPostDummy {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactions;
  views: number;
  userId: number;
}
