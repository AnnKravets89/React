import Users from "../components/users-component/Users.tsx";
import {Outlet} from "react-router/internal/react-server-client";

const UsersPage = () => {
    return (
        <div className={'flex'}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;
