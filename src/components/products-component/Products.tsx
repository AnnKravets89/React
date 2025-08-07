import './Products.css';
import {useEffect, useState} from "react";
import type {IProduct} from "../../models/ProductModel.ts";
import {loadProducts} from "../../services/api.service.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {

        async function fetchProducts () {
            const allProducts = await loadProducts();
            setProducts(allProducts);
        }
        fetchProducts();

    }, []);
    return (
        <div className={'w-full flex flex-col '}>
            {
                products.map((product) => (<Product key={product.id} product={product} />))
            }
        </div>
    );
};
