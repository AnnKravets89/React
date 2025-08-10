import type {IPostJson} from "../../../models/PostJsonModel.ts";
import type {FC} from "react";

type PropsPostJsonType = {
    postJson: IPostJson
}

const PostJson: FC<PropsPostJsonType> = ({postJson}) => {
    return (
        <div className={'w-xs flex flex-col gap-3 p-[20px] border rounded-lg'}>
            <div className={'flex gap-2 font-medium'}>
                <p>{postJson.id}{'.'}</p>
                <h2>{postJson.title}</h2>
            </div>
                <p>{postJson.body}</p>
        </div>
    );
};

export default PostJson;
