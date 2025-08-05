import './Post.css';
import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PropPostType = {post: IPost};

export const Post: FC<PropPostType> = ({post}) => {

    return (
        <div className={"post-card flex flex-col gap-3 shadow-blue-700 shadow-lg"}>
            <div className={"flex gap-3"}>
                <p className={"font-medium pt-5px"}>{post.id}{'.'}</p>
                <h2 className={"text-xl font-bold "}>{post.title}</h2>
            </div>
                <p className={"post-body"}>{post.body}</p>
        </div>
    );
};
