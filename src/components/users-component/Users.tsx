import {useEffect, useState} from "react";
import type {IUser} from "../../models/users-models/UserModel.ts";
import {getUsers} from "../../services/api.service.ts";
import type {IUserResponse} from "../../models/users-models/UserResponseModel.ts";
import User from "../user-component/User.tsx";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
            .then(({users}: IUserResponse) => {
                setUsers(users);
            })
    }, []);

    return (
        <div className={'w-full flex flex-col gap-6 justify-evenly items-center mt-[30px]'}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;
