import type {IUserJson} from "../../../models/users-json-models/UserJsonModel.ts";
import type {FC} from "react";

type PropsUserJsonType = {
    userJson: IUserJson
}
const UserJson: FC<PropsUserJsonType> = ({userJson}) => {
    return (
        <div className={'w-xs flex flex-col gap-3 p-[20px] border rounded-lg'}>
            <div className={'flex gap-2 font-medium'}>
                <p>{userJson.id}{'.'}</p>
                <h2>{userJson.name}</h2>
            </div>
            <div>
                <p>{userJson.username}</p>
                <p>{userJson.email}</p>
                <p>{userJson.phone}</p>
                <p>{userJson.website}</p>
            </div>

            <div className={'flex gap-7'}>
                <div>
                    <h3 className={'font-medium'}>{'Address'}</h3>
                    <p>{userJson.address.city}</p>
                    <p>{userJson.address.street}</p>
                    <p>{userJson.address.suite}</p>
                    <p>{userJson.address.zipcode}</p>
                </div>
                <div>
                    <h4 className={'font-medium'}>{'Geo'}</h4>
                    <p>{userJson.address.geo.lat}</p>
                    <p>{userJson.address.geo.lng}</p>
                </div>
            </div>

            <div>
                <h3 className={'font-medium'}>{'Company'}</h3>
                <p>{userJson.company.name}</p>
                <p>{userJson.company.catchPhrase}</p>
                <p>{userJson.company.bs}</p>
            </div>
        </div>
    );
};

export default UserJson;
