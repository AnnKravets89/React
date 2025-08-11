import {useEffect, useState} from "react";
import type {ICommentDummy} from "../../../models/comments-dummy-models/CommentDummyModel.ts";
import {commentService} from "../../../services/dummy.api.service.ts";
import type {ICommentDummyResponse} from "../../../models/comments-dummy-models/CommentDummyResponse.ts";
import CommentDummy from "../comment-dummy-component/CommentDummy.tsx";

const CommentsDummy = () => {
    const [commentsDummy, setCommentsDummy] = useState<ICommentDummy[]>([]);

    useEffect(() => {

        commentService.getCommentsDummy()
            .then(({comments}: ICommentDummyResponse) => {
                setCommentsDummy(comments);
            })
    }, []);

    return (
        <div className={'w-full grid grid-cols-4 gap-4 mt-[20px]'}>
            {
                commentsDummy.map((commentDummy: ICommentDummy) => <CommentDummy key={commentDummy.id} commentDummy={commentDummy}/>)
            }
        </div>
    );
};

export default CommentsDummy;
