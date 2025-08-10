import {useEffect, useState} from "react";
import type {IUserDummy} from "../../../models/users-dummy-models/UserDummyModel.ts";
import {getUsersDummy} from "../../../services/api.service.ts";
import UserDummy from "../user-dummy-component/UserDummy.tsx";


const UsersDummy = () => {
    const [usersDummy, setUsersDummy] = useState<IUserDummy[]>([]);

    useEffect(() => {

        async function fetchUsersDummy () {
            const allUsersDummy = await  getUsersDummy();
            setUsersDummy(allUsersDummy);
        }
        fetchUsersDummy();

    }, []);
    return (
        <div>
            {
                usersDummy.map((userDummy) => (<UserDummy key={userDummy.id} userDummy={userDummy}/>))
            }
        </div>
    );
};

export default UsersDummy;
