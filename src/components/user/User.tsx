import type {IUser} from "../../models/UserModel.ts";
import type {FC} from "react";
import {Link, useNavigate} from "react-router-dom";

type UserTypeProps = {
    user: IUser
}
export const User: FC<UserTypeProps> = ({user}) => {

    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('posts/' + user.id, {state: user})
    }

    return (
        <div>

                <Link to={'details'} state={user}>{user.name}</Link>

            <button onClick={handleOnClick}>{'Go to details'}</button>

        </div>
    );
};
