import {useEffect, useState} from "react";
import type {IPost} from "../../models/posts-models/PostModel.ts";
import {getPosts} from "../../services/api.service.ts";
import type {IPostResponse} from "../../models/posts-models/PostResponseModel.ts";
import Post from "../post-component/Post.tsx";


const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {

        getPosts()
            .then(({posts}: IPostResponse) => {
                setPosts(posts);
            })
    }, []);
    return (
        <div className={'grid grid-cols-3 gap-4 m-[20px]'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;
