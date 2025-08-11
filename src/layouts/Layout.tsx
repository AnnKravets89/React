import Menu from "../components/menu-component/Menu.tsx";
import {Outlet} from "react-router/internal/react-server-client";

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
