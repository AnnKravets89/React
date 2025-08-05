import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            setUsers(users);
        }
        fetchData();
        // getUsers()
        //     .then(response => {
        //         setUsers(response);
        //     });

        return () => {
            console.log('done');
        }
    }, []);
    return (
        <>
            {
                users.map(user => <UserComponent key={user.id} item={user} />)
            }
        </>
    );
};
