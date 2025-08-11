import type {IUser} from "../../models/users-models/UserModel.ts";
import type {FC} from "react";

type PropsUserType = {
    user: IUser;
}
const User: FC<PropsUserType> = ({user}) => {
    return (
            <div className={'flex flex-col gap-10 w-[80%] p-[50px] border rounded-lg'}>
                <div className={'flex justify-between'}>
                    <div>
                        <img src={user.image} alt={user.firstName}/>
                    </div>
                    <div className={'flex gap-3'}>
                        <p>{user.id}{'.'}</p>
                        <h2>{user.firstName} {user.lastName} {user.maidenName}</h2>
                    </div>
                    <div>
                        <p>{user.age}</p>
                        <p>{user.birthDate}</p>
                        <p>{user.gender}</p>
                    </div>
                    <div>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.username}</p>
                        <p>{user.password}</p>
                    </div>
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

                <div className={'flex justify-between'}>
                    <div>
                        <p>{user.ip}</p>
                        <p>{user.macAddress}</p>
                        <p>{user.university}</p>
                        <p>{user.userAgent}</p>
                        <p>{user.ein}</p>
                        <p>{user.ssn}</p>
                        <p>{user.role}</p>
                    </div>
                    <div>
                        <p>{user.address.country}</p>
                        <p>{user.address.state}</p>
                        <p>{user.address.stateCode}</p>
                        <p>{user.address.city}</p>
                        <p>{user.address.address}</p>
                        <p>{user.address.postalCode}</p>
                        <p>{user.address.coordinates.lat}</p>
                        <p>{user.address.coordinates.lng}</p>
                    </div>
                </div>

                <div className={'flex justify-between'}>
                    <div>
                        <p>{user.bank.cardExpire}</p>
                        <p>{user.bank.cardNumber}</p>
                        <p>{user.bank.cardType}</p>
                        <p>{user.bank.currency}</p>
                        <p>{user.bank.iban}</p>
                    </div>
                    <div>
                        <p>{user.crypto.coin}</p>
                        <p>{user.crypto.wallet}</p>
                        <p>{user.crypto.network}</p>
                    </div>
                    <div>
                        <p>{user.company.name}</p>
                        <p>{user.company.title}</p>
                        <p>{user.company.department}</p>
                    </div>
                    <div>
                        <p>{user.company.address.country}</p>
                        <p>{user.company.address.state}</p>
                        <p>{user.company.address.stateCode}</p>
                        <p>{user.company.address.city}</p>
                        <p>{user.company.address.postalCode}</p>
                        <p>{user.company.address.coordinates.lat}</p>
                        <p>{user.company.address.coordinates.lng}</p>
                    </div>
                </div>
            </div>
    );
};

export default User;
