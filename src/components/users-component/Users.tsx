import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/UserModel.ts";
import {userService} from "../../services/api.service.ts";
import type {IUserResponse} from "../../models/UserResponseModel.ts";
import User from "../user-component/User.tsx";

const Users = () => {
    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';

        userService.getUsers(currentPage)
            .then(({users}: IUserResponse) => {
                setUsers(users);
            })

    }, [searchParams]);


    return (
        <div className={'grid grid-cols-2 gap-4 m-[20px]'}>
            {
                users.map((user: IUser) => (<User key={user.id} user={user}/>))
            }
        </div>
    );
};

export default Users;
