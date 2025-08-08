import {useEffect, useState} from "react";
import {userService} from "../../services/api.service.ts";
import type {IUser} from "../../models/UserModel.ts";
import {User} from "../user/User.tsx";

export const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers().then((allUsers) => {
            setUsers(allUsers);
        })
    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

