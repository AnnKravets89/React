import './CommentDummy.css';
import type {FC} from "react";
import type {ICommentDummy} from "../../../models/comments-dummy-models/CommentDummyModel.ts";

type PropsCommentDummyType = {
    commentDummy: ICommentDummy
}
const CommentDummy: FC<PropsCommentDummyType> = ({commentDummy}) => {
    return (
        <div className={"comment flex flex-col gap-3"}>
            <div className={"flex gap-2"}>
                <p className={"font-medium text-lg"}>{commentDummy.id}{'.'}</p>
                <h3>{commentDummy.user.username}</h3>
                <h4>{commentDummy.user.fullName}</h4>
            </div>
            <div className={'flex flex-col gap-2'}>
                <p>{commentDummy.body}</p>
                <p className={'font-medium'}>{commentDummy.likes} {'likes'}</p>
            </div>
        </div>
    );
};

export default CommentDummy;
