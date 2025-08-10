import type {ICrypto} from "./CryptoModel.ts";
import type {ICompany} from "./CompanyModel.ts";
import type {IBank} from "./BankModel.ts";
import type {IAddress} from "./AddressModel.ts";
import type {IHair} from "./HairModel.ts";

export interface IUserDummy {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHair;
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
  bank: IBank;
  company: ICompany;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: ICrypto;
  role: string;
}
