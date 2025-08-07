import type {IProduct} from "./ProductModel.ts";

export interface IProductResponse {
    products: IProduct[],
    total: number,
    skip: number,
    limit: number
}
