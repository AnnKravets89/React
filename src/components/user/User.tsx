import type {IUser} from "../../models/UserModel.ts";
import type {FC} from "react";

type UserTypeProps = {
    user: IUser
}
export const User: FC<UserTypeProps> = ({user}) => {
    return (
        <div>
            {
                user.username
            }
        </div>
    );
};
