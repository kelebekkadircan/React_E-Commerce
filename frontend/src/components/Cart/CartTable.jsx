import { useContext } from "react";
import CartItem from "./CartItem.jsx";
import { CardContext } from "../../context/CardProvider.jsx";

const CartTable = () => {

    const { cardItems } = useContext(CardContext)

    return (
        <table className="shop-table">
            <thead>
                <tr>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Subtotal</th>
                </tr>
            </thead>
            <tbody className="cart-wrapper">
                {cardItems.map((item) => (
                    <CartItem cardItem={item} key={item.id} />

                ))}

            </tbody>
        </table>
    );
};

export default CartTable;