import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropType = {
    item: IUser;
    foo: (item: IUser) => void;
}

export const UserComponent: FC<UserPropType> = ({item, foo}) => {
    return (
            <>
                <div>{item.name}</div>
                <button onClick={() => {
                    foo(item);
                }}>Details</button>
            </>
    );
};
