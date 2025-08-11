import type {IPost} from "../../models/posts-models/PostModel.ts";
import type {FC} from "react";

type PropsPostType = {
    post: IPost
}
const Post: FC<PropsPostType> = ({post}) => {
    return (
        <div className={"post flex flex-col gap-3 shadow-blue-500 shadow-lg p-[10px]"}>
            <div className={'flex flex-col gap-3'}>
                <div className={"flex gap-3"}>
                    <p className={"font-medium pt-5px"}>{post.id}{'.'}</p>
                    <h2 className={"text-xl font-bold "}>{post.title}</h2>
                </div>
                <p className={"post-body"}>{post.body}</p>
            </div>
            <div className={'flex gap-7 justify-center'}>
                <ul className={'flex flex-col gap-3'}>
                    {
                        post.tags.map((tag, index) => (
                            <li key={index}>
                                {'#'}{tag}
                            </li>
                        ))
                    }
                </ul>
                <div className={'flex flex-col gap-3'}>
                    <p>{'likes - '}{post.reactions.likes}</p>
                    <p>{'dislikes - '}{post.reactions.dislikes}</p>
                    <p>{'views - '}{post.views}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
