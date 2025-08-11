import type {IUser} from "../../models/UserModel.ts";
import type {FC} from "react";
import {useNavigate} from "react-router";

type PropsUserType = {
    user: IUser;
}
const User: FC<PropsUserType> = ({user}) => {
    const navigation = useNavigate();

    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')

    }
    return (
        <div className={'flex gap-20'}>
            <div className={'w-3xs flex gap-3'}>
                <p>{user.id}{'.'}</p>
                <h2>{user.firstName} {user.lastName} {user.maidenName}</h2>
            </div>
            <div className={'w-3xs'}>
                <button className={'rounded-md p-[7px] bg-cyan-500 text-white font-bold'} onClick={onButtonClickNavigate}>
                    Click Me
                </button>
            </div>
        </div>
    );
};

export default User;
