import type {ICart} from "../../models/CartModel.ts";
import type {FC} from "react";

type PropsCartType = {
    cart: ICart;
}
const Cart: FC<PropsCartType> = ({cart}) => {
    return (
        <div>
            <p>{cart.totalProducts}</p>
            <p>{cart.totalQuantity}</p>
            <p>{cart.discountedTotal}</p>
            <p>{cart.total}</p>
        </div>
    );
};

export default Cart;
