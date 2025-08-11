import type {IUser} from "../../models/UserModel.ts";
import type {FC} from "react";

type PropsUserType = {
    user: IUser;
}
const User: FC<PropsUserType> = ({user}) => {
    return (
        <div>
            <div className={'flex gap-3'}>
                <p>{user.id}{'.'}</p>
                <h2>{user.firstName} {user.lastName} {user.maidenName}</h2>
            </div>
        </div>
    );
};

export default User;
