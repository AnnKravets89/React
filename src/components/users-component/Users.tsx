import User from "../user-component/User.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

const Users = () => {
    console.log('users');
    const [users, setUsers] = useState([]);

    const arr: number[] = useMemo(() => {
        return [11, 22, 33];

    }, []);

    const foo = useCallback(() => {
        console.log('test');
    }, []); // кешувати пропси або об'єкти

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
            <User foo={foo} arr={arr}/>
        </div>
    );
};

export default Users;
