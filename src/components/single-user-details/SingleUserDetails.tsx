import {useLocation} from "react-router-dom";
import type {IUser} from "../../models/UserModel.ts";

export function SingleUserDetails() {

    const {state} = useLocation();
    const user = state as IUser;

    return (
        <div>
            {user.email}
        </div>
    );
}
