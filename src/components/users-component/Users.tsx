import {useEffect, useState} from "react";
import type {IUser} from "../../models/UserModel.ts";
import {useSearchParams} from "react-router-dom";
import {getUsers} from "../../service/api.service.ts";
import User from "../user-component/User.tsx";


const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();
    useEffect(() => {

        getUsers(query.get('pg') || '1')
            .then(value => setUsers(value.data));
    }, [query]);

    return (
        <div>
            {
                users.map(value =>
                    <User
                        key={value.id}
                          item={value}/>)
            }
        </div>
    );
};

export default Users;
