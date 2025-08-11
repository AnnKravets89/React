import type {ICart} from "./CartModel.ts";

export interface ICartResponse {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}
