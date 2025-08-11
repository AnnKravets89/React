import './Menu.css';
import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'users'}>Users</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
