import Posts from "../components/posts/Posts.tsx";
import {useParams} from "react-router-dom";




const PostsPage = () => {
    const {userId} = useParams();
    return (
        <div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export default PostsPage;
