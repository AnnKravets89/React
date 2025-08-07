import type {IProduct} from "../models/ProductModel.ts";
import type {IProductResponse} from "../models/ProductResponseModel.ts";

const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products';

export const loadProducts = async (): Promise<IProduct[]> => {
    const productsResponse: IProductResponse = await fetch(endpointProducts)
         .then(value => value.json())
    return productsResponse.products;
}
