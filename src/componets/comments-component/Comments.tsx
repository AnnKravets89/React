import './Comments.css';
import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComment.ts";
import {loadComments} from "../../services/api.service.ts";
import {Comment} from "../comment-component/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        loadComments()
            .then(value => setComments(value));
    }, []);
    return (
        <div className={"comments w-full grid grid-cols-5 gap-4"}>
            {
                comments.map((comment) => (<Comment key={comment.id} comment={comment}/>))
            }
        </div>
    );
};

