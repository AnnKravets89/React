import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {cartService} from "../../services/api.service.ts";
import type {ICartResponse} from "../../models/CartResponseModel.ts";
import type {ICart} from "../../models/CartModel.ts";
import Cart from "../cart-component/Cart.tsx";

const Carts = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        if(id) {
            cartService.getCartsOfUser(id)
                .then(({carts}: ICartResponse) => {
                    setCarts(carts);
                })
        }

    }, [id]);
    return (
        <div className={'flex gap-10'}>
            {
                carts.map((cart: ICart) => <Cart key={cart.id} cart={cart}/>)
            }
        </div>
    );
};

export default Carts;
