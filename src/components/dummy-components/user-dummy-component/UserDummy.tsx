import type {IUserDummy} from "../../../models/users-dummy-models/UserDummyModel.ts";
import type {FC} from "react";

type PropsUserDummyType = {
    userDummy: IUserDummy
}
const UserDummy: FC<PropsUserDummyType> = ({userDummy}) => {
    return (
        <div>
            <div>
                <div>
                    <img src={userDummy.image} alt={userDummy.firstName}/>
                </div>
                <div>
                    <p>{userDummy.id}</p>
                    <h2>{userDummy.firstName} {userDummy.lastName} {userDummy.maidenName}</h2>
                </div>
                <div>
                    <p>{userDummy.age}</p>
                    <p>{userDummy.birthDate}</p>
                    <p>{userDummy.gender}</p>
                </div>
            </div>

            <div>
                <p>{userDummy.email}</p>
                <p>{userDummy.phone}</p>
                <p>{userDummy.username}</p>
                <p>{userDummy.password}</p>
            </div>
            <div>
                <div>
                    <p>{userDummy.bloodGroup}</p>
                    <p>{userDummy.height}</p>
                    <p>{userDummy.weight}</p>
                </div>
                <div>
                    <p>{userDummy.eyeColor}</p>
                    <p>{userDummy.hair.color}</p>
                    <p>{userDummy.hair.type}</p>
                </div>
            </div>

            <div>
                <div>
                    <p>{userDummy.ip}</p>
                    <p>{userDummy.macAddress}</p>
                    <p>{userDummy.university}</p>
                    <p>{userDummy.userAgent}</p>
                    <p>{userDummy.ein}</p>
                    <p>{userDummy.ssn}</p>
                    <p>{userDummy.role}</p>
                </div>
                <div>
                    <p>{userDummy.address.country}</p>
                    <p>{userDummy.address.state}</p>
                    <p>{userDummy.address.stateCode}</p>
                    <p>{userDummy.address.city}</p>
                    <p>{userDummy.address.address}</p>
                    <p>{userDummy.address.postalCode}</p>
                    <p>{userDummy.address.coordinates.lat}</p>
                    <p>{userDummy.address.coordinates.lng}</p>
                </div>
            </div>

            <div>
                <div>
                    <p>{userDummy.bank.cardExpire}</p>
                    <p>{userDummy.bank.cardNumber}</p>
                    <p>{userDummy.bank.cardType}</p>
                    <p>{userDummy.bank.currency}</p>
                    <p>{userDummy.bank.iban}</p>
                </div>
                <div>
                    <p>{userDummy.crypto.coin}</p>
                    <p>{userDummy.crypto.wallet}</p>
                    <p>{userDummy.crypto.network}</p>
                </div>
                <div>
                    <p>{userDummy.company.name}</p>
                    <p>{userDummy.company.title}</p>
                    <p>{userDummy.company.department}</p>
                </div>
                <div>
                    <p>{userDummy.company.address.country}</p>
                    <p>{userDummy.company.address.state}</p>
                    <p>{userDummy.company.address.stateCode}</p>
                    <p>{userDummy.company.address.city}</p>
                    <p>{userDummy.company.address.postalCode}</p>
                    <p>{userDummy.company.address.coordinates.lat}</p>
                    <p>{userDummy.company.address.coordinates.lng}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDummy;
