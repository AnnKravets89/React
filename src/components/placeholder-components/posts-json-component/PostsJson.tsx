import {useEffect, useState} from "react";
import type {IPostJson} from "../../../models/PostJsonModel.ts";
import {postsJsonService} from "../../../services/json.api.service.ts";
import PostJson from "../post-json-component/PostJson.tsx";

const PostsJson = () => {
    const [postsJson, setPostsJson] = useState<IPostJson[]>([]);

    useEffect(() => {

        postsJsonService.getPostsJson().then((allPostsJson) => {
            setPostsJson(allPostsJson);
        })
    }, []);

    return (
        <div className={'grid grid-cols-4 gap-4 m-[20px] ml-[50px]'}>
            {
                postsJson.map((postJson) => (<PostJson key={postJson.id} postJson={postJson}/>))
            }
        </div>
    );
};

export default PostsJson;
