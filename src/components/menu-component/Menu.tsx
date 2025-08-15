import './Menu.css';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'cars'}>Cars</Link></li>
                <li><Link to={'cars/create'}>Create New Car</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
