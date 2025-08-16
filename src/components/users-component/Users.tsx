import User from "../user-component/User.tsx";
import {useEffect, useState} from "react";

const Users = () => {
    console.log('users');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
        return () => {
            console.log('unsubscribe');
        }

    }, []);

    return (
        <div>
            users component
            <User/>
        </div>
    );
};

export default Users;
