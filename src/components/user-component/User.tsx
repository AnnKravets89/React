import type {IUser} from "../../models/UserModel.ts";
import type {FC} from "react";

type PropsUserType = {
    user: IUser;
}
const User: FC<PropsUserType> = ({user}) => {
    return (
        <div className={'flex flex-col gap-10 p-[20px]'}>
            <div className={'flex gap-7'}>
                <img src={user.image} alt={user.firstName}/>
                <div className={'flex flex-col'}>
                    <div className={'flex gap-3'}>
                        <p>{user.id}{'.'}</p>
                        <h2>{user.firstName} {user.lastName} {user.maidenName}</h2>
                    </div>
                    <div>
                        <p>{user.age}</p>
                        <p>{user.birthDate}</p>
                        <p>{user.gender}</p>
                    </div>
                </div>
                <div>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.username}</p>
                    <p>{user.password}</p>
                </div>
            </div>
            <div className={'flex flex-col gap-5'}>

                <div className={'flex gap-6'}>
                    <div>
                        <p>{user.bloodGroup}</p>
                        <p>{user.height}</p>
                        <p>{user.weight}</p>
                    </div>
                    <div>
                        <p>{user.eyeColor}</p>
                        <p>{user.hair.color}</p>
                        <p>{user.hair.type}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
