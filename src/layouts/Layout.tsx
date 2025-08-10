import {Outlet} from "react-router-dom";
import Menu from "../components/placeholder-components/menu-component/Menu.tsx";

const Layout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Layout;
