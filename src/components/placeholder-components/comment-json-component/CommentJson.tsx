import type {ICommentJson} from "../../../models/CommentJsonModel.tsx";
import type {FC} from "react";

type PropsCommentJsonType = {
    commentJson: ICommentJson
}

const CommentJson: FC<PropsCommentJsonType> = ({commentJson}) => {
    return (
        <div className={'w-xs flex flex-col gap-3 p-[20px] border rounded-lg'}>
            <div className={'flex gap-2 font-medium'}>
                <p>{commentJson.id}{'.'}</p>
                <h2>{commentJson.name}</h2>
            </div>
                <p>{commentJson.email}</p>
                <p>{commentJson.body}</p>
        </div>
    );
};

export default CommentJson;
