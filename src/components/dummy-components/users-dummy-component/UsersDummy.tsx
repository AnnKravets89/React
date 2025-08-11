import {useEffect, useState} from "react";import type {IUserDummy} from "../../../models/users-dummy-models/UserDummyModel.ts";
import UserDummy from "../user-dummy-component/UserDummy.tsx";
import {userService} from "../../../services/dummy.api.service.ts";
import type {IUserDummyResponse} from "../../../models/users-dummy-models/UserDummyResponse.ts";

const UsersDummy = () => {
    const [usersDummy, setUsersDummy] = useState<IUserDummy[]>([]);

    useEffect(() => {

        userService.getUsersDummy()
            .then(({users}: IUserDummyResponse) => {
                setUsersDummy(users);
            })
    }, []);

    return (
        <div className={'w-full flex flex-col justify-evenly items-center'}>
            {
               usersDummy.map((userDummy: IUserDummy) => <UserDummy key={userDummy.id} userDummy={userDummy}/>)
            }
        </div>
    );
};

export default UsersDummy;
