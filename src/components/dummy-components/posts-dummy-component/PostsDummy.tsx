import {useEffect, useState} from "react";
import type {IPostDummy} from "../../../models/posts-dummy-models/PostDummyModel.ts";
import {postService} from "../../../services/dummy.api.service.ts";
import type {IPostDummyResponse} from "../../../models/posts-dummy-models/PostDummyResponse.ts";
import PostDummy from "../../post-dummy-component/PostDummy.tsx";

const PostsDummy = () => {
    const [postsDummy, setPostsDummy] = useState<IPostDummy[]>([]);

    useEffect(() => {

        postService.getPostsDummy()
            .then(({posts}: IPostDummyResponse) => {
                setPostsDummy(posts);
            })
    }, []);

    return (
        <div className={'grid grid-cols-3 gap-4 m-[20px]'}>
            {
                postsDummy.map((postDummy: IPostDummy) => <PostDummy key={postDummy.id} postDummy={postDummy}/>)
            }
        </div>
    );
};

export default PostsDummy;
