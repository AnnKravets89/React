import {type FC, useEffect, useState} from "react";
import {postServices} from "../../services/api.service.ts";
import type {IPost} from "../../models/PostModel.ts";
import Post from "../post/Post.tsx";

type PropsPostsType = {
    userId: string
}

const Posts: FC<PropsPostsType> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        if(userId) {
            postServices
                .getAllPostsOfUserById(+userId)
                .then(post => {
                    console.log(post);
                    setPosts(post);
                });
        }
    }, [userId]);

    return (
        <div>
            {
                posts.map((post) => (<Post key={post.id} post={post}/>) )
            }
        </div>
    );
};

export default Posts;
