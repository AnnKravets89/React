import type {IUser} from "../../models/UserModel.ts";
import type {FC} from "react";

type PropsUser = {
    item: IUser;
}
const User: FC<PropsUser> = ({item}) => {
    return (
        <div>
            <div>{item.first_name} {item.last_name}</div>
            <img src={item.avatar} alt={item.last_name}/>
        </div>
    );
};

export default User;
