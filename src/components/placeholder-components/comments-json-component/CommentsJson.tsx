import {useEffect, useState} from "react";
import type {ICommentJson} from "../../../models/CommentJsonModel.ts";
import {commentsJsonService} from "../../../services/json.api.service.ts";
import CommentJson from "../comment-json-component/CommentJson.tsx";

const CommentsJson = () => {
    const [commentsJson, setCommentsJson] = useState<ICommentJson[]>([]);

    useEffect(() => {

        commentsJsonService.getCommentsJson().then((allCommentsJson) => {
            setCommentsJson(allCommentsJson);
        })
    }, []);

    return (
        <div className={'grid grid-cols-4 gap-4 m-[20px] ml-[50px]'}>
            {
                commentsJson.map((commentJson) => (<CommentJson key={commentJson.id} commentJson={commentJson}/>))
            }
        </div>
    );
};

export default CommentsJson;
