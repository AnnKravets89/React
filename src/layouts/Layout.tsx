import Cars from "../components/cars-component/Cars.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Cars/>
            <Outlet/>
        </div>
    );
};

export default Layout;
