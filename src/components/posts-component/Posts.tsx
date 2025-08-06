import './Posts.css';
import {useEffect, useState} from "react";
import type {IPostModel} from "../../models/PostModel.ts";
import {loadPosts} from "../../services/api.service.ts";
import {Post} from "../post-component/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {

        async function fetchPosts() {
            const allPosts = await loadPosts();
            setPosts(allPosts);
        }
        fetchPosts();
    }, []);

    return (
        <div className={'posts grid grid-cols-3 gap-4'}>
            {
                posts.map((post) => (<Post key={post.id} post={post} />))
            }
        </div>
    );
};
