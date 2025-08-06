import './Comment.css'
import type {ICommentModel} from "../../models/CommentModel.ts";
import type {FC} from "react";

type PropsCommentType = {
    comment: ICommentModel
}

export const Comment: FC<PropsCommentType> = ({comment}) => {

    return (
        <div className={"comment flex flex-col gap-3"}>
            <div className={"flex gap-2"}>
                <p className={"font-medium text-lg"}>{comment.id}{'.'}</p>
                <h3>{comment.user.username}</h3>
                <h4>{comment.user.fullName}</h4>
            </div>
            <div className={'flex flex-col gap-2'}>
                <p>{comment.body}</p>
                <p className={'font-medium'}>{comment.likes} {'likes'}</p>
            </div>
        </div>
    );
};
