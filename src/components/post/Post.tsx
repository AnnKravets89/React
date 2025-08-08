import type {FC} from "react";
import type {IPost} from "../../models/PostModel.ts";

type PropsPostType = {
    post: IPost;
}

const Post: FC<PropsPostType> = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
