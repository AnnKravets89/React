import type {IProduct} from "./IProduct.ts";

export type ProductsResponseType = {
    total: number;
    skips: number;
    limit: number;
    products: IProduct[]
}
