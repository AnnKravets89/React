import User from "../user-component/User.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../../hooks/useFetch.tsx";

const Users = () => {
    console.log('users');

    const users = useFetch();

    const arr: number[] = useMemo(() => {
        return [11, 22, 33];

    }, []);

    const foo = useCallback(() => {
        console.log('test');
    }, []); // кешувати пропси або об'єкти


    return (
        <div>
            users component
            {
                users.map(user => (<User foo={foo} arr={arr} user={user}/>))
            }
        </div>
    );
};

export default Users;
