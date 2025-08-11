import type {IPostDummy} from "../../../models/posts-dummy-models/PostDummyModel.ts";
import type {FC} from "react";

type PropsPostDummyType = {
    postDummy: IPostDummy
}
const PostDummy: FC<PropsPostDummyType> = ({postDummy}) => {
    return (
        <div className={"post flex flex-col gap-3 shadow-blue-500 shadow-lg"}>
            <div className={'flex flex-col gap-3'}>
                <div className={"flex gap-3"}>
                    <p className={"font-medium pt-5px"}>{postDummy.id}{'.'}</p>
                    <h2 className={"text-xl font-bold "}>{postDummy.title}</h2>
                </div>
                <p className={"post-body"}>{postDummy.body}</p>
            </div>
            <div className={'flex gap-7 justify-center'}>
                <ul className={'flex flex-col gap-3'}>
                    {
                        postDummy.tags.map((tag, index) => (
                            <li key={index}>
                                {'#'}{tag}
                            </li>
                        ))
                    }
                </ul>
                <div className={'flex flex-col gap-3'}>
                    <p>{'likes - '}{postDummy.reactions.likes}</p>
                    <p>{'dislikes - '}{postDummy.reactions.dislikes}</p>
                    <p>{'views - '}{postDummy.views}</p>
                </div>
            </div>
        </div>
    );
};

export default PostDummy;
