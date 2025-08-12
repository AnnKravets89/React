import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/UserModel.ts";
import {getUsers} from "../../service/api.service.ts";

const Some = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();
    useEffect(() => {

        const pg = query.get('pg');
        getUsers(pg || '1').then(value => console.log(value));
    }, [query]);
    return (
        <div>

        </div>
    );
};

export default Some;
