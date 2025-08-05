import './Posts.css';
import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {loadPosts} from "../../services/api.service.ts";
import {Post} from "../post-component/Post.tsx";


export const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        loadPosts()
            .then(value => setPosts(value));
    }, []);

    return (
        <div className={"posts-container grid grid-cols-4 gap-4"}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};
