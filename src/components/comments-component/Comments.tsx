import './Comments.css';
import type {ICommentModel} from "../../models/CommentModel.ts";
import {useEffect, useState} from "react";
import {loadComments} from "../../services/api.service.ts";
import {Comment} from "../comment-component/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);
    useEffect(() => {

        async function fetchComments () {
            const allComments = await loadComments();
            setComments(allComments);
        }
        fetchComments();
    }, []);

    return (
        <div className={"comments w-full grid grid-cols-4 gap-4"}>
            {
                comments.map((comment) => (<Comment key={comment.id} comment={comment}/>))
            }
        </div>
    );
};
