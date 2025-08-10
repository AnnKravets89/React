import {useEffect, useState} from "react";
import type {IUserJson} from "../../../models/users-json-models/UserJsonModel.ts";
import {usersJsonService} from "../../../services/api.service.ts";
import UserJson from "../user-json-component/UserJson.tsx";

const UsersJson = () => {
    const [usersJson, setUsersJson] = useState<IUserJson[]>([]);

    useEffect(() => {
        usersJsonService.getUsersJson().then((allUsersJson) => {
            setUsersJson(allUsersJson);
        })
    }, []);

    return (
        <div className={'grid grid-cols-4 gap-4 m-[20px]'}>
            {
                usersJson.map((userJson) => (<UserJson key={userJson.id} userJson={userJson}/>))
            }
        </div>
    );
};

export default UsersJson;
