import type {IAddress} from "./AddressModel.ts";

export interface ICompany {
    department: string;
    name: string;
    title: string;
    address: IAddress;
}
