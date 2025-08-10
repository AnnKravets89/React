import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'users/jsonplaceholder'}>Users Json</Link></li>
                <li><Link to={'posts/jsonplaceholder'}>Posts Json</Link></li>
                <li><Link to={'comments/jsonplaceholder'}>Comments Json</Link></li>
                <li><Link to={'users/dummyjson'}>Users Dummy</Link></li>
                <li><Link to={'posts/dummyjson'}>Posts Dummy</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
