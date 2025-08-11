import {useEffect, useState} from "react";
import type {IUser} from "../../models/UserModel.ts";
import {userService} from "../../services/api.service.ts";
import type {IUserResponse} from "../../models/UserResponseModel.ts";
import User from "../user-component/User.tsx";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {

        userService.getUsers()
            .then(({users}: IUserResponse) => {
                setUsers(users);
            })
    }, []);

    return (
        <div className={'flex flex-col gap-3 ml-[20px]'}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;
