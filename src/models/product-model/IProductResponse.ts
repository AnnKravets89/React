import type {IProduct} from "./IProduct.ts";

export interface IProductResponse {
    total: number;
    skips: number;
    limit: number;
    products: IProduct[];
}
