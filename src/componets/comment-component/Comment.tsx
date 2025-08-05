import './Comment.css';
import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

type PropCommentType = {comment: IComment}

export const Comment: FC<PropCommentType> = ({comment}) => {

    return (
        <div className={"comment flex flex-col gap-3"}>
            <div className={"flex gap-2"}>
                <p className={"font-medium text-lg"}>{comment.id}{'.'}</p>
                <h2>{comment.name}</h2>
            </div>
            <div className={"flex flex-col gap-2"}>
                <p className={"font-medium"}>{comment.email}</p>
                <p className={"body-comment"}>{comment.body}</p>
            </div>
        </div>
    );
};
